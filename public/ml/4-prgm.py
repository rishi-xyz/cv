import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

iris = load_iris()
X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

def evaluate_knn(k, X_train, X_test, y_train, y_test, weighted=False):
    if weighted:
        knn = KNeighborsClassifier(n_neighbors=k, weights='distance')
    else:
        knn = KNeighborsClassifier(n_neighbors=k)

    knn.fit(X_train, y_train)
    y_pred = knn.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred, average='weighted')

    return accuracy, f1

k_values = [1, 3, 5]
results = []

for k in k_values:
    print(f"Evaluating k-NN for k={k} (non-weighted):")
    accuracy, f1 = evaluate_knn(k, X_train, X_test, y_train, y_test, weighted=False)
    results.append(('k-NN', k, accuracy, f1))
    print(f"Accuracy: {accuracy:.4f}, F1-Score: {f1:.4f}\n")

    print(f"Evaluating k-NN for k={k} (weighted):")
    accuracy, f1 = evaluate_knn(k, X_train, X_test, y_train, y_test, weighted=True)
    results.append(('Weighted k-NN', k, accuracy, f1))
    print(f"Accuracy: {accuracy:.4f}, F1-Score: {f1:.4f}\n")

results_df = pd.DataFrame(results, columns=['Model', 'k', 'Accuracy', 'F1-Score'])
print(results_df)