// getting id in the form of array form local storage..........................

const getStoredDonationId = () => {
    const donationId = localStorage.getItem('donation-id')
    if (donationId) {
        return JSON.parse(donationId)
    }
    else {
        return []
    }
}

// save data on the local storage..........................
const saveDonationId = (id) => {
    const donationId = getStoredDonationId()
    const isExist = donationId.find(donation => donation === id)

    if (!isExist) {
        donationId.push(id)
        localStorage.setItem('donation-id', JSON.stringify(donationId))
    }

}

export { saveDonationId, getStoredDonationId }