import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

//ping
const pingServer =  async () => {
  const response = await axios.get('http://localhost:5000/ping')

  if (response.data) {
    console.log(response.data)
  }

  return response.data
}

const computeTotalBill = (reservationData) => {
  let totalBill = 0;
  let totalDays = ((Date.parse(reservationData.COD) - Date.parse(reservationData.CID)) / (((1000 * 60) * 60) * 24))

  if (reservationData.tour === "Day") {
    totalBill += 50;
  } else {
    totalBill += 150
  }

  if (reservationData.facility === 'Bahay Kubo') {
    totalBill += 1800
  } else if(reservationData.facility === 'Large Tent') {
    totalBill += 800
  } else if(reservationData.facility === 'Medium Tent') {
    totalBill += 500
  } else if(reservationData.facility === 'Small Tent') {
    totalBill += 300
  }

  if (reservationData.activity === "Trekking") {
    totalBill += 300
  } else if (reservationData.activity === "Harvesting") {
    totalBill += 200
  } else if (reservationData.activity === "Samgy") {
    totalBill += 100
  } else if (reservationData.activity === "Package(999)") {
    totalBill += 999
  }

  totalBill *= reservationData.visitor;
  totalBill *= totalDays

  return totalBill

}

// Register reservation
const registerReservations = async (reservationData) => {

  const user = localStorage.getItem('user')

  const totalBill = computeTotalBill(reservationData);

  const payload = {
    userId: JSON.parse(user)._id,
    contactNumber: reservationData.phone,
    checkInDate: reservationData.CID,
    checkOutDate: reservationData.COD,
    numberOfVisitors: reservationData.visitor,
    totalBill
  }

  const response = await axios.post(API_URL + 'reservations', payload)

  if(!!response.data) {
    return response.data._id
  } else {
    return false
  }
}

// Register pop
const registerProofOfPayment = async (popData) => {
  const response = await axios.post(API_URL + 'pop', popData)

  if(!!response.data) {
    return response.data._id
  } else {
    return false
  }
}

const apiService = {
  registerReservations,
  pingServer,
  registerProofOfPayment
}

export default apiService