import  { useState } from 'react';
import styles from './AboutUsSection.module.css';

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState('Frequent Questions');
  const [activeQuestion, setActiveQuestion] = useState('How does Order.UK work?');

  const questions = [
    'How does Order.UK work?',
    'What payment methods are accepted?',
    'Can I track my order in real-time?',
    'Are there any special discounts or promotions available?',
    'Is Order.UK available in my area?'
  ];

  const steps = [
    {
      title: 'Place an Order!',
      description: 'Place order through our website or Mobile app',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2srcXLrO4w7v-jzfb4qdIHjsrgFj7Y0041A&s'
    },
    {
      title: 'Track Progress',
      description: 'Your can track your order status with delivery time',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRct7E96ENYn4LXVror8xBuEmbZgw0gpmkvtA&s'
    },
    {
      title: 'Get your Order!',
      description: 'Receive your order at a lighting fast speed!',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQu8IQF2ycdNvSjSzLIVIsNPuNm71M8j5qHQ&s'
    }
  ];

  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Know more about us!</h2>
          <div className={styles.tabs}>
            {['Frequent Questions', 'Who we are?', 'Partner Program', 'Help & Support'].map(tab => (
              <button 
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.questionList}>
            {questions.map(question => (
              <button
                key={question}
                className={`${styles.questionBtn} ${activeQuestion === question ? styles.activeQuestion : ''}`}
                onClick={() => setActiveQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepIcon}><img src={step.icon} alt={step.title} /></div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>

          <p className={styles.orderInfo}>
            Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
    </section>
  );
}
