import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import PaymentModal from '../PaymentModal/PaymentModal';
import { SvgCard, SvgEdit } from '../../assets';
import apiCall from '../../utils/API';

const Profile=({profileData={}})=> {
  
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()
  const handleReturn =()=>{
    navigate('/home')
  }
  const [paymentCards, setPaymentCards] = useState(profileData?.cardDetails);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileEdit = async() => {
    if(isEditing){
      const response = await apiCall(
        import.meta.env.VITE_BACKEND_BASE_URL+'/api/user/userProfile',
        "PUT",
        {Authorization:localStorage.getItem('token')},
        {
          name:userData.name,
          email:userData.email,
          gender:userData.gender,
          country:userData.country
        })
      
      if(response===0){
        navigate('/login')
      }
    }
    setIsEditing(!isEditing);
  };

  const handleChange = async(e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditCard = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleSaveCard = async(updatedCard) => {
    // setPaymentCards(cards =>
    //   cards.map(card =>
    //     card.cardId === selectedCard.cardId
    //       ? { ...card, ...updatedCard }
    //       : card
    //   )
    // );
    console.log("Hello",updatedCard);
    
    
    setIsModalOpen(false);
  };

  const handleAddNewCard = () => {
    setIsModalOpen(true);
  };

  const handleRemoveCard = async() => {
    setPaymentCards(cards =>
      cards.filter(card => card.cardId !== selectedCard.cardId)
    );
    setIsModalOpen(false);
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/card/delete',
      "POST",
      {Authorization:localStorage.getItem('token')},
      {
        cardId:selectedCard.cardId
      })
    
    if(response===0){
      navigate('/login')
    }

  };

  useEffect(()=>{
    setUserData(profileData?.userDetails)
  },[])

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileHeaderLeft}>
          <button className={styles.backButton} onClick={handleReturn}>←</button>
          <h2>My Profile</h2>
        </div>
        <button className={styles.editButton} onClick={handleProfileEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.profileHeaderLeft}>
          <img 
            src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000" 
            alt="Profile" 
            className={styles.profileImage} 
          />
          <h3>{userData.name}</h3>
        </div>

        <div className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className={styles.paymentMethods}>
          <h3>Saved Payment Methods</h3>
          <div className={styles.paymentCards}>
            {paymentCards.map(card => (
              <div key={card.cardId} className={styles.card}>
                <img src={SvgCard} alt="Card" />
                <div >
                  <div className={styles.cardNumber}>{card.cardNumber}</div>
                  <div className={styles.cardName}>{card.nameOnCard}</div>
                </div>
                <div className={styles.editCard} 
                onClick={() => handleEditCard(card)}>
                  <img src={SvgEdit} alt="Edit" />
                </div>
              </div>
            ))}
            <div className={styles.addCard} onClick={handleAddNewCard}>
              + Add New Card
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardData={selectedCard || {}}
        onSave={handleSaveCard}
        onRemove={handleRemoveCard}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default Profile;