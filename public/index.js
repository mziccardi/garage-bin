const name = $('#name')
const reason = $('#reason')
const cleanliness = $('#clean')

const createItem = ()=>{
  axios.post('/api/items', {

  })
}

$('.submit').on('click',(e)=>{
  e.preventDefault()
  let cleanstuff = $('#clean').find(":selected").val()
  console.log(cleanstuff);
})
