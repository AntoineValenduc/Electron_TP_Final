Format du fichier questions.json

```json
[
    {
      "question": "Quelle est la réponse A ?",
      "theme": "cinema",
      "images": {
        "imageQuestion": "chemin/vers/image.jpg",
        "imageReponse": "chemin/vers/autre-image.jpg"
      },
      "type": "choixMultiple",
      "choix": ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      "reponse": [0]
    },
    {
      "question": "écrire carotte",
      "theme": "musique",
      "images": {
        "imageQuestion": "chemin/vers/image.jpg",
        "imageReponse": "chemin/vers/autre-image.jpg"
      },
      "type": "reponseCourte",
      "reponse": "carotte"
    },
    {
      "question": "Je suis vrai",
      "theme": "series",
      "images": {
        "imageQuestion": "chemin/vers/image.jpg",
        "imageReponse": "chemin/vers/autre-image.jpg"
      },
      "type": "choixMultiple",
      "choix": ["Vrai", "Faux"],
      "reponse": [0]
    }
]
  
```

theme : musique, serie, film, livre
type : choixMultiple, reponseCourte
Une question choixMultiple doit avoir un array de strings "choix" et un array de chiffres (index de la/des réponses correctes)