import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  });

  const fetchQuestions = async (tempUrl) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(tempUrl).catch((error) => console.log(error));
    if (response.status === 200) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(true);
        setWaiting(false);
        setError(false);
      } else {
        setError(true);
        setWaiting(true);
      }
    } else {
      setWaiting(true);
    }
    setLoading(false);
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        return 0;
      } else {
        return index;
      }
    })
  }

  const checkAnswer = value => {
    if (value) {
      setCorrectAnswer((old) => old + 1)
    }
    if (index === questions.length - 1) {
      openModal();
    }
    nextQuestion();
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setWaiting(true);
    setCorrectAnswer(0);
  }

  const handleChange = (event) => {
    console.log(event);
    const target = event.target.name;
    const value = event.target.value;
    setQuiz({ ...quiz, [target]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;

    fetchQuestions(url);
  }

  return <AppContext.Provider value={{ waiting, loading, questions, index, correctAnswer, error, isModalOpen, nextQuestion, checkAnswer, closeModal, quiz, handleChange, handleSubmit }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
