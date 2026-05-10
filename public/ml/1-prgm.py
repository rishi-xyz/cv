import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\OneDrive\\Desktop\\IRIS.csv")

print(df.head())

num_column = 'sepal_width'

mean = df[num_column].mean()
median = df[num_column].median()
std_dev = df[num_column].std()
mode = df[num_column].mode()[0]
variance = df[num_column].var()
data_range = df[num_column].max() - df[num_column].min()

print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"mode:{mode}")
print(f"Standard Deviation: {std_dev}")
print(f"Variance: {variance}")
print(f"Range: {data_range}")

Q1 = df[num_column].quantile(0.25)
Q3 = df[num_column].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers = df[(df[num_column] < lower_bound) | (df[num_column] > upper_bound)]
print(f"Outliers in {num_column}:")
print(outliers)

categorical_column = 'species'

category_counts = df[categorical_column].value_counts()
print(f"Category Counts for {categorical_column}:")
print(category_counts)

plt.figure(figsize=(10, 6))
sns.histplot(df[num_column], kde=True, color='blue')
plt.title(f"Histogram of {num_column}")
plt.xlabel(num_column)
plt.ylabel('Frequency')
plt.show()

plt.figure(figsize=(10, 6))
sns.boxplot(x=df[num_column], color='white')
plt.title(f"Boxplot of {num_column}")
plt.xlabel(num_column)
plt.show()

plt.figure(figsize=(10, 6))
category_counts.plot(kind='bar', color='green')
plt.title(f"Frequency of Categories in {categorical_column}")
plt.xlabel(categorical_column)
plt.ylabel('Frequency')
plt.show()

plt.figure(figsize=(8, 8))
category_counts.plot(kind='pie', autopct='%1.1f%%', startangle=90, colors=sns.color_palette("Set2", len(category_counts)))
plt.title(f"Category Distribution of {categorical_column}")
plt.show()