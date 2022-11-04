import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { getUser, selectUserActive, setUserActive, updateNotes } from '../store/slices/users/users';

export const useNotes = ({
  isDownloadPDFEnabled,
  consultant,
  dispatch,
  path
}) => {
  const [showModal, setShowModal] = useState(false)
  const [notes, setNotes] = useState({})
  const [message, setMessage] = useState('')
  const [user, setUser] = useState()

  const now = moment();
  const todayId = `${now.year()}-${now.month() + 1}-${now.date()}`;

  const handleModal = () => {
    if (!isDownloadPDFEnabled) return;
    setShowModal(true)
  }

  useEffect(() => {
    if (!isDownloadPDFEnabled) return;
    const fetchUser = async () => {
      const user = await dispatch(getUser(consultant.id));
      setUser(user)
      const notes = user.notes ? user.notes : {};
      if (notes[todayId]) {
        if (notes[todayId][path]) {
          setMessage(notes[todayId][path]);
        } else {
          setMessage('');
        }
      } else {
        setMessage('');
      }
      setNotes(notes)
    }
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultant.id, path, isDownloadPDFEnabled])

  const handleSave = async () => {
    const notesN = JSON.parse(JSON.stringify(notes));
    if (!notesN[todayId]) {
      notesN[todayId] = {}
    }
    if (notesN[todayId][path]) {
      delete notesN[todayId][path]
    }
    notesN[todayId][path] = message
    const updatedUser = {
      ...user,
      notes: notesN
    }
    console.log({ notesN, todayId, path, message, updatedUser })
    dispatch(updateNotes(updatedUser))
    dispatch(selectUserActive(consultant.id))
    dispatch(setUserActive(updatedUser))
    setShowModal(false)
  }

  return {
    showModal,
    setShowModal,
    handleModal,
    handleSave,
    message,
    setMessage
  }
}