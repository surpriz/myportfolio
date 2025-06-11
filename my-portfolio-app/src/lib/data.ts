export const projects = [
  {
    title: "Système intelligent de modération et d'analyse de commentaires clients",
    objective: "Développer une solution automatisée pour modérer les commentaires clients, générer des réponses personnalisées et analyser les sentiments pour améliorer l'expérience client.",
    domain: "Service client / E-commerce",
    client: "Hospitalidee.com",
    startDate: "Mars 2023",
    endDate: "Octobre 2023",
    history: [
      {
        stage: "Collecte de données",
        details: [
          "Intégration avec les API des plateformes d'avis clients internes et externes (Trustpilot, Google Reviews, etc.)",
          "Mise en place d'un système de webhooks pour la capture en temps réel",
          "Stockage dans MongoDB (données brutes) et PostgreSQL (données structurées)",
        ],
      },
      {
        stage: "Prétraitement",
        details: [
          "Nettoyage et normalisation du texte avec NLTK et spaCy",
          "Tokenisation et vectorisation avec Hugging Face Transformers",
          "Feature engineering : extraction d'entités, de thèmes et d'indicateurs de sentiment",
          "Anonymisation des données personnelles (RGPD) avec des techniques de NER",
        ],
      },
      {
        stage: "Modélisation",
        details: [
          "Développement d'un pipeline de modération avec LangChain",
          "Utilisation des modèles Mistral AI pour la classification et la génération de texte",
          "Implémentation d'un système de workflow avec LangGraph pour la logique décisionnelle",
          "Fine-tuning de modèles pour l'analyse de sentiments spécifiques au domaine",
        ],
      },
      {
        stage: "Déploiement",
        details: [
          "Architecture serverless avec AWS Lambda",
          "Conteneurisation avec Docker et orchestration avec AWS ECS",
          "Mise en place d'une API GraphQL avec Apollo Server",
          "CI/CD avec GitLab CI pour le déploiement continu",
        ],
      },
      {
        stage: "Monitoring",
        details: [
          "Dashboard pour l'analyse des tendances des sentiments",
          "Logging centralisé avec ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Alerting automatique en cas de pic de commentaires négatifs",
          "Suivi des performances des modèles avec Weights & Biases",
        ],
      },
    ],
  },
  {
    title: "Système de prévision de maintenance prédictive pour les équipements industriels",
    objective: "Développer un système complet de maintenance prédictive pour réduire les temps d'arrêt des machines et optimiser les coûts de maintenance.",
    domain: "Industrie manufacturière",
    client: "Schneider Electric",
    startDate: "Juillet 2022",
    endDate: "Décembre 2022",
    history: [
      {
        stage: "Collecte de données",
        details: [
          "Mise en place de capteurs IoT sur les machines (température, vibration, pression)",
          "Création d'un pipeline de données avec Apache Kafka pour le streaming en temps réel",
          "Utilisation d'AWS IoT Core pour la gestion des dispositifs",
          "Stockage dans S3 (données brutes) et Redshift (données transformées)",
        ],
      },
      {
        stage: "Prétraitement",
        details: [
          "Développement de pipelines ETL avec Apache Airflow",
          "Nettoyage et normalisation des données avec PySpark",
          "Feature engineering : création d'indicateurs techniques (RMS, FFT, etc.)",
          "Stockage des features dans Feature Store (AWS SageMaker Feature Store)",
        ],
      },
      {
        stage: "Modélisation",
        details: [
          "Développement de modèles XGBoost et LSTM avec PyTorch",
          "Utilisation de MLflow pour le tracking des expériences",
          "Validation croisée et optimisation des hyperparamètres",
          "Tests A/B pour comparer les performances des modèles",
        ],
      },
      {
        stage: "Déploiement",
        details: [
          "Conteneurisation avec Docker",
          "Déploiement sur Kubernetes (EKS)",
          "Mise en place d'une API REST avec FastAPI",
          "CI/CD avec GitHub Actions",
        ],
      },
      {
        stage: "Monitoring",
        details: [
          "Dashboard Grafana pour le suivi des métriques",
        ],
      },
    ],
  },
]; 