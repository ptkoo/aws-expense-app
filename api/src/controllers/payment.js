const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const axios = require('axios');
const qs = require('querystring')
const User = require('../models/users')

exports.postPayment = (req, res, next) => {
    const cusPhone = req.body.cusPhone
    const amount = req.body.amount
    let token
    const phone = req.user.accountNo;
    const password = req.user.accPass;
    console.log(phone)
    console.log(password)

    const requestBody = {
        grant_type: 'client_credentials'
}

    axios.post('https://opensandbox.ayainnovation.com/token', qs.stringify(requestBody),{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic U1pGR1AwTFZHanRYR0s5NkFpNjZmaHZiTW9vYTo2WjM0dVFIeE9EMllPVXpiR0pVNl83YnZWS2dh'
    }
  }).then((res) => {
      console.log('2')
    //   console.log(res)
      token = res.data.access_token
      console.log(token)
      var data = {
          phone: phone,
          password: password
      }
      return axios.post('https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/login', data, {
    headers: {
        Token: `Bearer ${token}`
    }
  })
}).then((res) => {
      console.log('3')
    //   console.log(res)
      var data2 = {
            customerPhone: cusPhone,
            amount: amount,
            currency: "MMK",
            externalTransactionId: "2758374657123453",
            externalAdditionalData: "Hi ggwp"
      }
      return axios.post('https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/requestPushPayment', data2, {
    headers: {
        Token: `Bearer ${token}`,
        Authorization: `Bearer ${res.data.token.token}`
    }
  })
}).then((response) => {
    console.log(response)    
    const data = response.data
    console.log(data)
    
    res.end(JSON.stringify({
        status: 'success'
    }))
})
}
//     axios({
//         method: 'post',
//         url: 'https://opensandbox.ayainnovation.com/token',
//         headers: {
//             Authorization: 'Basic U1pGR1AwTFZHanRYR0s5NkFpNjZmaHZiTW9vYTo2WjM0dVFIeE9EMllPVXpiR0pVNl83YnZWS2dh'
//         }
//     }).then((res) => {
//         console.log('3')
//         token = res.token.token
//         return axios({
//             method: 'post',
//             url: 'https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/login',
//             data: {
//                 phone: phone,
//                 password: password
//             },
//             headers: {
//             Token: `Bearer ${token}`
//         }
//         })
//     }).then((res) => {
//         console.log('4')
//         return axios({
//             method: 'post',
//             url: 'https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/requestPushPayment',
//             data: {
//                 customerPhone: phone,
//                 amount: "1000",
//                 currency: "MMK",
//                 externalTransactionId: "2758374657123453",
//                 externalAdditionalData: "Hi Khant thu aung"
//             },
//             headers: {
//             Token: `Bearer ${token}`,
//             Authorization: `Bearer ${res.token.token}`
//         }
//         })
//     })
// }



//     const result1 = async () =>  {
//     const result = await  axios(
//       {
//         method:'post',
//         url : 'https://opensandbox.ayainnovation.com/token',
//         headers: {
//           Authorization: 'Basic U1pGR1AwTFZHanRYR0s5NkFpNjZmaHZiTW9vYTo2WjM0dVFIeE9EMllPVXpiR0pVNl83YnZWS2dh'
//       },
//          withCredentials: true
//       }
//     )
//     let token = result.token.token
//     const data = {
//       phone: phone,
//       password: password
//   }

//     const result2 = await axios(
//       {
//         method:'post',
//         url : 'https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/login',
//         data: data,
//         headers: {
//           Token: `Bearer ${token}`
//       },
//          withCredentials: true
//       }
//       )
//       const data2 = {
//         customerPhone: phone,
//         amount: "1000",
//         currency: "MMK",
//         externalTransactionId: "2758374657123453",
//         externalAdditionalData: "Hi Khant thu aung"
//   }

//   const result3 = await axios(
//     {
//       method:'post',
//       url : 'https://opensandbox.ayainnovation.com/merchant/1.0.0/thirdparty/merchant/requestPushPayment',
//       data: data2,
//       headers: {
//         Token: `Bearer ${token}`,
//         Authorization: `Bearer ${result2.token.token}`
//     },
//        withCredentials: true
//     }
//     )
//     ans(result3)
//     }
//     ans = (rs) => {
//         answer = rs
//         console.log(answer)
//     }
    
// }