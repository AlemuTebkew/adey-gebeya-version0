/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import axios from 'axios'

export default {
    fetchEmployees(context) {
        axios.get('/api/employees')
            .then(response => {
                if (response.status === 200) {
                    context.commit('setEmployees', response.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    },
    async addEmployee(context, employee) {
        try {
            var response = await axios.post('/api/employees/', JSON.stringify(employee), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                console.log('things goes right, 1 employee is affected')
                var employeeState = context.getters.getEmployees
                employeeState.unshift(response.data)
                context.commit('setEmployees', employeeState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e.response)
        }
    },

    async updateEmployee(context, editedEmployee) {
        try {
            var response = await axios.patch('/api/employees/' + editedEmployee.id,
                    JSON.stringify(editedEmployee), {
                        headers: {
                            'Content-Type': 'application/json',
                            // 'X-crf-token': window.App.csrfToken,
                            Accept: 'application/json'
                        }
                    }
                )
                // console.log('edited data' + editedEmployee.first_name + editedEmployee.last_name + editedEmployee.email)
            if (response.status === 200) {
                console.log('things goes right, 1 employee is updated')
                console.log(response.data)
                var employeeState = context.getters.getEmployees
                var index = employeeState.findIndex((employee) => {
                    return editedEmployee.id === employee.id
                })
                employeeState[index] = response.data
                context.commit('setEmployees', employeeState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e)
        }
    },
    async deleteEmployee(context, id) {
        console.log(context)
        try {
            var response = await axios.delete(`/api/employees/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-crf-token': window.App.csrfToken,
                    Accept: 'application/json'
                }
            })
            if (response.status === 202) {
                console.log('things goes right, 1 employee is updated')
                var employeeState = context.getters.getEmployees
                var index = employeeState.findIndex((employee) => {
                    return (id === employee.id)
                })
                employeeState.splice(index, 1)
                console.log('deleted employee index' + index)
                context.commit('setEmployees', employeeState)
            } else {
                console.log('things go wrong with status code' + response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }
}