const name = $('#name')
const reason = $('#reason')
const cleanliness = $('#clean')


$(document).ready(()=>{
  addItems()
  countItems()
})


$('.submit').on('click',(e)=>{
  e.preventDefault()
  const newItem = {
    name:name.val(),
    reason:reason.val(),
    cleanliness:cleanliness.find(":selected").val()
  }
  createItem(newItem)
  countItems()
})



const createItem = (newItem)=>{
  axios.post('/api/items', newItem)
  .then((response)=>{
    $('.item-list').empty()
    response.data.map((item)=>{
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
      $('.item-list').append(`<li class='item-name'> Name: ${item.name} <br/> Reason:  ${item.reason} <br/> Cleanliness: ${item.cleanliness}</li>`)
    })
  })
}



const clearInputs = ()=>{
  $('.name-input').val('')
  $('.reason-input').val('')
}

const countItems = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    $('.item-count').html(`Total number of items: ${response.data.length}`)
  })
  countSparklingItems()
  countDustyItems()
  countRancidItems()
}

const countSparklingItems = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    let allItems= response.data
    let counter = countSparkleHelper(allItems)
    $('.sparkle-count').html(`Number of sparkling items: ${counter}`)
  })
}
const countDustyItems = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    let allItems= response.data
    let counter = countDustyHelper(allItems)
    $('.dusty-count').html(`Number of dusty items: ${counter}`)
  })
}
const countRancidItems = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    let allItems= response.data
    let counter = countRancidHelper(allItems)
    $('.rancid-count').html(`Number of rancid items: ${counter}`)
  })
}

const sortByName = ()=>{
  axios.get('/api/items')
  .then((response)=>{
    let allItems = response.data
    sortHelper(allItems)
    console.log(allItems);
    allItems.map((item)=>{
      $('.sorted-list').append(`<li>${item.name}</li>`)
    })
  })
}

const sortHelper = (allItems)=>{
  let sorted = allItems.sort((a,b)=>{
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    if(nameA < nameB) return -1
    if(nameA > nameB) return 1
    return 0
  })
}

const countSparkleHelper = (allItems)=>{
  let count = 0
  for(let i=0; i<allItems.length; i++){
    if(allItems[i].cleanliness === 'sparkling'){
      count++
    }
  }
  return count
}
const countDustyHelper = (allItems)=>{
  let count = 0
  for(let i=0; i<allItems.length; i++){
    if(allItems[i].cleanliness === 'dusty'){
      count++
    }
  }
  return count
}
const countRancidHelper = (allItems)=>{
  let count = 0
  for(let i=0; i<allItems.length; i++){
    if(allItems[i].cleanliness === 'rancid'){
      count++
    }
  }
  return count
}

$('.test').on('click',(e)=>{
  $('.item-list').hide()
  sortByName()
})

// $('.submit').on('click',(e)=>{
//   e.preventDefault()
//   let cleanstuff = $('#clean').find(":selected").val()
//   console.log(cleanstuff);
// })
