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
      icon: 'https://s3-alpha-sig.figma.com/img/9e86/106a/631393e760f085d14c048d525e3ef56e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBn4DGvkHII3NKPksznlUhjIYZitSBM5PM7NyCeHvUeHWiZ6t-fdt1Q4DDktCvUievWXrMToB2r0vENFqC62CLOdnvZjfCWBhk41-8BWN0VDY7QK-yDQXHcbVctpPcI568fGxN0GAl2aGdQusbLvzOWM4FE56WbUAfHd5v68DMFd~pCWvRN0~n8Xo1p3efxSoB4LCoZ5MzVilpALoOCEBdZRiXdm67DFv8zLpuWzXZ4aMx1B~trDfGFzoQgArDUKNP4LzZ8VXaTiAHAu5IZkuipQOylmKFfz~ey8aVaW6KghzFyNXOlXR3ghlO5A6Z5qhCA1ueZmsKopxNevhSlvoA__'
    },
    {
      title: 'Track Progress',
      description: 'Your can track your order status with delivery time',
      icon: 'https://s3-alpha-sig.figma.com/img/84b2/691f/8d3c41392c27f8ba967b28c003b6511d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IaDIg3prWyrgpJL7yMF1J~dtonfjtHiIrXU8-8Rqnay0eELUnGBzDPnSW6wDgXe6HfprBp7fZs4nBUUXshziNPW1RV18RJemW709QSQelkVK1F2DcHsgRSKq6A159ISSmOI5C5Y2mDgSXqqZmRLnbpgFaMtCXPOUEmIOsjGvl4NuOQn-2bE-pdeee21LDU1d8R8syQUNkkGwxtBObsHnVNeG3pTzxLFEIQtQ4U-CNE4ACdB-1khT~g45HksKwpfwlVfMext8SZdZCdZTKSD2LXWqg6ITgRnfJqjUa-OAtiJEDMl2LwHMrFeebB31I~UIp4ediiMmls1MnbaltKOH6g__'
    },
    {
      title: 'Get your Order!',
      description: 'Receive your order at a lighting fast speed!',
      icon: 'https://s3-alpha-sig.figma.com/img/80e6/0b66/ab934ae45238834b62ee67cff03882f6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxJcmlJVRdpfnW2i5IPKYJlQAJHeNL6U~sGnh7F4LEiH~cUwd4QhmtWdteImO-DKRPi0TOQPSl4UNXUWy4eSRLD0KZKAFOouLdgKH4EphoNEYE7jLfb~2PyTduuirnUZ7u98PYgHPEpp0FItsQUwyAVk6FJdWQN~GsShmnPUL9KjRa12xMI8X3P0a14Wi1WD5S6O2fzYX-dCq~qtbVPfk-rGo3dqaY~rA1AGcEuaKp9EXqaouX20nTwxq28~untygCwB6Oi17clV7A9BAYcDMUQD1lp~vMC-TMwR-tsegpP1Ios2lj8Q3xTWNYB~eAEMtBVLKXmrXkbZg9iYOtqObA__'
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
