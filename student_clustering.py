
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend for saving plots without GUI
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

df = pd.read_csv("students_scored.csv")

print("Dataset Loaded Successfully")
print(df.head())

features = ["APS", "WWS", "PTMS", "CRS", "SRI"]
X = df[features]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("Data Normalization Completed")

k = 4  
kmeans = KMeans(n_clusters=k, random_state=42)
df["Cluster"] = kmeans.fit_predict(X_scaled)

print("K-Means Clustering Applied")

output_csv = "students_clustered.csv"
df.to_csv(output_csv, index=False)
print(f"Clustered dataset saved as {output_csv}")

print("\nCluster Distribution:")
print(df["Cluster"].value_counts())

plt.figure(figsize=(8, 6))
plt.scatter(df["APS"], df["SRI"], c=df["Cluster"])
plt.xlabel("Academic Performance Score (APS)")
plt.ylabel("Student Readiness Index (SRI)")
plt.title("Student Segmentation using K-Means Clustering")
plt.colorbar(label="Cluster ID")

plot_file = "student_clusters.png"
plt.savefig(plot_file)
plt.close()  # Close figure without showing GUI window

print(f"Cluster visualization saved as {plot_file}")

comparison = pd.crosstab(df["Cluster"], df["Risk_Category"])
print("\nCluster vs Risk Category Comparison:")
print(comparison)

