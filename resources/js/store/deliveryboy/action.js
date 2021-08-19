/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import axios from 'axios'

export default {
    fetchDeliveryBoys(context) {
        axios.get('/api/deliveryboys')
            .then(response => {
                if (response.status === 200) {
                    context.commit('setDeliveryboys', response.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    },
    async addDeliveryboy(context, deliveryboys) {
        try {
            var response = await axios.post('/api/deliveryboys/', JSON.stringify(deliveryboys), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                console.log('things goes right, 1 deliveryboys is affected')
                var deliveryboysState = context.getters.getDeliveryboys
                deliveryboysState.unshift(response.data)
                context.commit('setDeliveryboys', deliveryboysState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e.response)
        }
    },

    async updateDeliveryboy(context, editedDeliveryboy) {
        try {
            var response = await axios.patch('/api/deliveryboys/' + editedDeliveryboy.id,
                    JSON.stringify(editedDeliveryboy), {
                        headers: {
                            'Content-Type': 'application/json',
                            // 'X-crf-token': window.App.csrfToken,
                            Accept: 'application/json'
                        }
                    }
                )
                // console.log('edited data' + editedEmployee.first_name + editedEmployee.last_name + editedEmployee.email)
            if (response.status === 200) {
                console.log('things goes right, 1 deliveryboys is updated')
                    // console.log(response.data)
                var deliveryboyState = context.getters.getDeliveryboys
                var index = deliveryboyState.findIndex((employee) => {
                    return editedDeliveryboy.id === employee.id
                })
                deliveryboyState[index] = response.data
                context.commit('setDeliveryboys', deliveryboyState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e)
        }
    },
    async deleteDeliveryboy(context, id) {
        // console.log(context)
        try {
            var response = await axios.delete(`/api/deliveryboys/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-crf-token': window.App.csrfToken,
                    Accept: 'application/json'
                }
            })
            if (response.status === 202) {
                console.log('things goes right, 1 deliveryboys is updated')
                var deliveryboysState = context.getters.getDeliveryboys
                var index = deliveryboysState.findIndex((deliveryboy) => {
                    return (id === deliveryboy.id)
                })
                deliveryboysState.splice(index, 1)
                    // console.log('deleted deliveryboys index' + index)
                context.commit('setDeliveryboys', deliveryboysState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }

}