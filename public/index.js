const name = $('#name')
const reason = $('#reason')
const cleanliness = $('#clean')


$(document).ready(()=>{
  addItems()
})


$('.submit').on('click',(e)=>{
  e.preventDefault()
  const newItem = {
    name:name.val(),
    reason:reason.val(),
    cleanliness:cleanliness.find(":selected").val()
  }
  createItem(newItem)
})



const createItem = (newItem)=>{
  axios.post('/api/items', newItem)
  .then((response)=>{
    $('.item-list').empty()
    response.data.map((item)=>{
      console.log(item.name)
      $('.item-list').append(`<li> Name: ${item.name} <br/> Reason:  ${item.reason} <br/> Cleanliness: ${item.cleanliness}</li>`)
    })
  })
  clearInputs()
}

const addItems = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    $('.item-list').empty()
    response.data.map((item)=>{
      console.log(item.name)
      $('.item-list').append(`<li> Name: ${item.name} <br/> Reason:  ${item.reason} <br/> Cleanliness: ${item.cleanliness}</li>`)
    })
  })
}

const clearInputs = ()=>{
  $('.name-input').val('')
  $('.reason-input').val('')
}



// $('.submit').on('click',(e)=>{
//   e.preventDefault()
//   let cleanstuff = $('#clean').find(":selected").val()
//   console.log(cleanstuff);
// })
