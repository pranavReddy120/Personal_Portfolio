import {
    Algo,
    cyber,
    spam,
    stock,
    prophet,
    agent, 
    swift1, 
    ferrari, 
    plane, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const projects = [
    {
      name: "CyberCity",
      description:
        "2D platformer made with Godot. Players fight melee and ranged enemies in a futuristic landscape",
      tags: [
        {
          name: "Godot Engine",
          color: "blue-text-gradient",
        },
        {
          name: "GDScript",
          color: "green-text-gradient",
        },
      ],
      image: cyber,
      source_code_link: "https://github.com/pranavReddy120/CyberCityV3",
    },
    {
      name: "Algorthmic Trader",
      description:
        "This project explores algorithmic trading strategies by implementing technical indicators such as Bollinger Bands, Simple Moving Averages (SMA), and Exponential Moving Averages (EMA)",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "NumPy",
          color: "pink-text-gradient",
        },
        {
          name: "hvPlot",
          color: "yellow-text-gradient",
        },
        {
          name: "Finta",
          color: "orange-text-gradient",
        },
      ],
      image: Algo,
      source_code_link: "https://github.com/pranavReddy120/Algorithmic_Trading_Learning",
    },
    {
      name: "SMS Spam Detector",
      description:
        "Detects spam messages using Sckit-learn for classifcation along with TfidfVectorizer pipeline. Simple front-end interface is made possible via Gradio integration",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "pink-text-gradient",
        },
        {
          name: "Gradio",
          color: "yellow-text-gradient",
        },
      ],
      image: spam, 
      source_code_link: "https://github.com/pranavReddy120/SMS_Spam_Detector",
    },
    {
      name: "Sales Forecaster",
      description:
        "The model uses Facebook Prophet to analyze historical Google search trends and stock prices, identifying correlations between search spikes and price movements",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "NumPy",
          color: "pink-text-gradient",
        },
        {
          name: "hvPlot",
          color: "yellow-text-gradient",
        },
        {
          name: "Facebook Prophet",
          color: "orange-text-gradient",
        },
      ],
      image: prophet,
      source_code_link: "https://github.com/pranavReddy120/Machine_Learning/tree/main/Forecasting_With_Facebook_Prophet",
    },
    {
      name: "LSTM Stock Predictor",
      description:
        "Two different deep learning RNN models to predict Bitcoin closing prices by utilizing FNG indicators and closing price windows. The models were trained with a 70/30 train-test split and MinMaxScaler for efficiency, and were evaluated based on loss metrics",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Sckit-learn",
          color: "pink-text-gradient",
        },
        {
          name: "hvPlot",
          color: "yellow-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "orange-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/pranavReddy120/Machine_Learning/tree/main/Neural_Network_Deep_Learning",
    },
    {
      name: "Weather AI-Agent",
      description:
        "Custom agent powered by language models and external APIs to provide real-time weather updates and fun facts about numbers by using tools like the LangChain, OpenWeatherMap and Numbers API ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "LangChain",
          color: "green-text-gradient",
        },
        {
          name: "OpenWeatherMap",
          color: "pink-text-gradient",
        },
        {
          name: "Numbers API",
          color: "yellow-text-gradient",
        },
      ],
      image: agent,
      source_code_link: "https://github.com/pranavReddy120/Langchain_Learning/blob/main/ai_agents_intro.ipynb",
    },
    {
      name: "PyBank",
      description:
        "App with multi-card capabilities and biometric authentication, using Firebase cloud storage to manage data across all cards",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      ],
      image: swift1,
      source_code_link: "https://github.com/pranavReddy120/Banking_App",
    },
    {
      name: "Car Info",
      description:
        "Provides detailed information about car models for select brands, including MSRP, engine specs, and more.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
      ],
      image: ferrari,
      source_code_link: "https://github.com/pranavReddy120/Car_App",
    },
    {
      name: "RC Airplane",
      description:
        "Designed custom RC plane from scratch equipped with functioning flight control systems, landing gear and navlights",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "Fusion360",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: plane,
      source_code_link: "https://github.com/pranavReddy120/RC_Aircraft",
    },
    
    
    
  ];
  
  export {projects};