export interface MLFiles {
  name: string;
  description: string;
  path: string;
}

export const mlFiles: MLFiles[] = [
  {
    name: "1-prgm.py",
    description: "Descriptive Statistics - Mean, median, mode, histogram, boxplot, IQR outliers",
    path: "/ml/1-prgm.py",
  },
  {
    name: "2-prgm.py",
    description: "Correlation Analysis - Scatter plot, Pearson coefficient, covariance & heatmap",
    path: "/ml/2-prgm.py",
  },
  {
    name: "3-prgm.py",
    description: "Principal Component Analysis (PCA) - Dimensionality reduction on Iris dataset",
    path: "/ml/3-prgm.py",
  },
  {
    name: "4-prgm.py",
    description: "k-Nearest Neighbors (k-NN) - Classification with weighted & unweighted variants",
    path: "/ml/4-prgm.py",
  },
  {
    name: "5-prgm.py",
    description: "Locally Weighted Regression - Non-parametric regression with Gaussian kernel",
    path: "/ml/5-prgm.py",
  },
  {
    name: "6-prgm.py",
    description: "Linear & Polynomial Regression - California Housing and Auto MPG datasets",
    path: "/ml/6-prgm.py",
  },
  {
    name: "7-prgm.py",
    description: "Decision Tree Classifier - Titanic survival prediction with tree visualization",
    path: "/ml/7-prgm.py",
  },
  {
    name: "8-prgm.py",
    description: "Naive Bayes Classifier - Gaussian NB on Iris dataset with confusion matrix",
    path: "/ml/8-prgm.py",
  },
  {
    name: "9-prgm.py",
    description: "K-Means Clustering - Breast cancer dataset with PCA visualization",
    path: "/ml/9-prgm.py",
  },
];