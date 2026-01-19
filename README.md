# Dedicated Mentoring System for Students (HEPro AI+)

## 📌 Project Overview
The Dedicated Mentoring System for Students (HEPro AI+) is a hybrid AI-powered platform designed to proactively support students across academics, wellness, productivity, and career readiness.

The system combines **rule-based decision-making** with **machine learning models** to ensure transparency, interpretability, and scalability in educational mentoring.

This project is developed as part of the **AI/ML Internship Program under HEPro AI**.

---

## 🎯 Objectives
- To continuously evaluate student readiness using explainable scoring models
- To segment students into risk and potential-based groups using ML
- To match students with suitable mentors using similarity modeling
- To trigger timely, rule-based mentoring interventions
- To improve mentoring effectiveness through feedback-driven learning

---

## 🧠 System Architecture
The system follows a modular, Python-first pipeline:

Student Data
↓
Feature Engineering
↓
Rule-Based Scoring (APS, WWS, PTMS, CRS)
↓
Student Readiness Index (SRI)
↓
ML Models (Clustering & Similarity Matching)
↓
Intervention Rules Engine
↓
Mentor Actions
↓
Feedback Loop



---

## 📊 Core Scoring Models
The system computes the following scores (0–100 scale):

- **APS** – Academic Performance Score
- **WWS** – Wellness & Wellbeing Score
- **PTMS** – Productivity & Time Management Score
- **CRS** – Career Readiness Score

### Student Readiness Index (SRI)


SRI acts as the primary indicator for student status and intervention intensity.

---

## 🤖 Machine Learning Components

### 1. Student Segmentation (Unsupervised Learning)
- Algorithm: K-Means Clustering
- Input Features: APS, WWS, PTMS, CRS
- Typical Clusters:
  - High Risk
  - Transitional
  - Stable
  - High Potential

### 2. Mentor Matching
- Technique: Cosine Similarity
- Matching Criteria:
  - Domain alignment
  - Mentoring style compatibility
  - Availability
  - Student needs

---

## ⚙️ Intervention Engine
The Python-based rules engine converts scores and ML insights into structured actions:

- Automated guidance (notifications, nudges)
- Mentor check-ins
- Escalation to senior mentors or counselors

---

## 🔄 Feedback & Learning
The system logs:
- Mentor feedback
- Student engagement metrics
- Outcome improvements

These are used to:
- Adjust similarity weights
- Recalibrate thresholds
- Improve future recommendations

---

## 🗂 Dataset Description
- **Student Dataset:** Academic, behavioral, wellness, productivity, and career-related features
- **Mentor Dataset:** Expertise, experience, mentoring style, availability, and feedback scores

(Sample datasets are provided in the `data/` directory.)

---

## 🛠 Tech Stack
- Python
- Pandas, NumPy
- Scikit-learn
- Matplotlib / Seaborn
- Jupyter Notebook

---

## 📈 Expected Outcomes
- Explainable AI-based mentoring system
- ML-driven student segmentation
- Personalized mentor allocation
- Scalable and modular architecture

---

## 🚀 Future Enhancements
- Real-time dashboard integration
- NLP-based sentiment analysis
- Cloud deployment
- Mobile app support

---

## 👨‍💻 Developed By
**Intern Name:** _Your Name_  
**Program:** AI/ML Internship – HEPro AI  
**Institution:** _Your College Name_

---

## 📜 License
This project is licensed under the MIT License.

