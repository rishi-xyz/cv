import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import pearsonr

iris = pd.read_csv("C:\\Users\\OneDrive\\Desktop\\iris.csv")
iris_num = iris.select_dtypes(include='number')

plt.figure(figsize=(8, 6))
sns.scatterplot(x='sepal_length', y='petal_length', data=iris)
plt.title("Scatter Plot: Sepal Length vs Petal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Petal Length")
plt.show()

corr_coefficient, _ = pearsonr(iris['sepal_length'], iris['petal_length'])
print(f'Pearson Correlation Coefficient between Sepal Length and Petal Length: {corr_coefficient:.2f}')

cov_matrix = iris_num.cov()
print("\nCovariance Matrix:")
print(cov_matrix)

corr_matrix = iris_num.corr()
print("\nCorrelation Matrix:")
print(corr_matrix)

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt='.2f', cbar=True)
plt.title("Correlation Matrix Heatmap")
plt.show()