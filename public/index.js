const name = $('#name')
const reason = $('#reason')
const cleanliness = $('#clean')


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
      $('.item-list').append(`<li>${item.name} ${item.reason} ${item.cleanliness}</li>`)
    })
  })
}





// $('.submit').on('click',(e)=>{
//   e.preventDefault()
//   let cleanstuff = $('#clean').find(":selected").val()
//   console.log(cleanstuff);
// })
