import pandas as pd

df = pd.read_csv("C:/Users/vikas/Downloads/students_500.csv")

df["APS"] = (
    df["gpa"] * 10 * 0.5 +
    df["attendance"] * 0.3 +
    df["assignments_completion"] * 0.2
)

df["WWS"] = (
    (10 - df["stress_level"]) * 10 * 0.4 +
    df["sleep_hours"] * 10 * 0.3 +
    df["mental_wellbeing"] * 10 * 0.3
)

df["PTMS"] = (
    df["productivity_score"] * 10 * 0.5 +
    (10 - df["distractions"]) * 10 * 0.5
)

df["CRS"] = (
    df["career_clarity"] * 10 * 0.5 +
    df["skill_readiness"] * 10 * 0.5
)

df["SRI"] = (
    0.30 * df["APS"] +
    0.25 * df["WWS"] +
    0.20 * df["PTMS"] +
    0.25 * df["CRS"]
)

def classify(score):
    if score >= 80:
        return "Green"
    elif score >= 65:
        return "Blue"
    elif score >= 50:
        return "Yellow"
    else:
        return "Red"

df["Risk_Category"] = df["SRI"].apply(classify)

df.to_csv("C:/Users/vikas/Desktop/HePro+/students_scored.csv", index=False)
