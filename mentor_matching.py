import pandas as pd
import numpy as np

def mentor_matching():
    # Load datasets
    try:
        students_df = pd.read_csv('students_clustered.csv')
        mentors_df = pd.read_csv('mentors.csv')
        print("✔ Datasets loaded successfully.")
    except FileNotFoundError as e:
        print(f"❌ Error: {e}")
        return

    # 1. Determine each student’s primary need
    def get_primary_need(row):
        if row['Risk_Category'] == 'Red':
            return 'Wellness'
        elif row['APS'] < 60:
            return 'Academic'
        elif row['CRS'] < 60:
            return 'Career'
        else:
            return 'General'

    students_df['Primary_Need'] = students_df.apply(get_primary_need, axis=1)

    # 2. Add intervention recommendation
    recommendations = {
        'Academic': 'Weekly academic review & study plan',
        'Wellness': 'Stress counseling & wellbeing sessions',
        'Career': 'Career guidance & skill roadmap',
        'General': 'General mentoring support'
    }
    students_df['Recommendation'] = students_df['Primary_Need'].map(recommendations)

    # 3. Add alert column
    students_df['Alert_Level'] = students_df['Risk_Category'].apply(lambda x: 'HIGH PRIORITY' if x == 'Red' else 'Normal')

    # 4. Match Mentor based on expertise
    # Create pools for each expertise
    mentor_pools = {
        'Academic': mentors_df[mentors_df['expertise'] == 'Academic'].to_dict('records'),
        'Wellness': mentors_df[mentors_df['expertise'] == 'Wellness'].to_dict('records'),
        'Career': mentors_df[mentors_df['expertise'] == 'Career'].to_dict('records'),
        'General': mentors_df.to_dict('records') # General need can be handled by any mentor
    }

    # Assign mentors (Round-robin to distribute load)
    mentor_assignments = []
    mentor_names = []
    
    # Counters to track round-robin position for each expertise pool
    pool_indices = {exp: 0 for exp in mentor_pools.keys()}

    for index, row in students_df.iterrows():
        need = row['Primary_Need']
        pool = mentor_pools[need]
        
        if pool:
            # Pick mentor using round-robin index
            idx = pool_indices[need] % len(pool)
            mentor = pool[idx]
            mentor_assignments.append(mentor['mentor_id'])
            mentor_names.append(mentor['name'])
            pool_indices[need] += 1
        else:
            mentor_assignments.append('N/A')
            mentor_names.append('No Mentor Available')

    students_df['Assigned_Mentor_ID'] = mentor_assignments
    students_df['Assigned_Mentor_Name'] = mentor_names

    # Save output
    output_file = 'student_recommendations.csv'
    students_df.to_csv(output_file, index=False)
    print(f"✔ Results saved to '{output_file}'.")

    # Print summary
    print("\n--- Student Need Summary ---")
    need_counts = students_df['Primary_Need'].value_counts()
    for need, count in need_counts.items():
        print(f"{need}: {count} students")
    print("----------------------------\n")

if __name__ == "__main__":
    mentor_matching()
