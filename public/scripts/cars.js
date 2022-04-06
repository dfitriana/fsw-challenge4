var AllCar = null

const getAllCar = () => {
    fetch('/getcars')
        .then((response) => response.json())
        .then((hasil) => {
            const body = document.getElementById('body')
            for (let i = 0; i < hasil.length; i++) {
                const Car = document.createElement('div')
                Car.innerHTML =
                `<div class="car">
                <img src=${hasil[i].image} alt="">
                <p>${hasil[i].type}</p>
                <h5>${hasil[i].rentPerDay} / hari</h5>
                <h6>${hasil[i].description}</h6>
                <h6><i class="fa fa-user-o" aria-hidden="true"></i>${hasil[i].capacity} orang</h6>
                <h6><i class="fa fa-cogs" aria-hidden="true"></i>${hasil[i].transmission}</h6>
                <h6><i class="fa fa-calendar-o" aria-hidden="true"></i>Tahun ${hasil[i].year}</h6>
                <button>Pilih Mobil</button>
                </div>`
                // `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
                // <h1>${hasil[i].manufacture} ${hasil[i].model} - ${hasil[i].year}</h1>
                // <img
                // class="car_image"
                //     src="./asset/${i %2 ==0 ? 'menu2': 'menu1'}.png"
                // />
                // <p style="text-align: center;color: aliceblue; font-size: 20px;">${hasil[i].description}</p>
                // </div>`

                body.appendChild(Car)
                
            }
            AllCar = hasil
        })
}

getAllCar()

const filterCar = (char) => {

    let newCar = AllCar.filter(cars => cars.available.includes(char)); // && cars.available == true
    const body = document.getElementById('body')
    body.innerHTML = ''
            newCar.forEach((element, id) => {
                const Car = document.createElement('div')
                Car.innerHTML = 
                `<div class="car">
                    <img src=${element.image} alt="">
                    <p>${element.type}</p>
                    <h5>${element.rentPerDay} / hari</h5>
                    <h6>${element.description}</h6>
                    <h6><i class="fa fa-user-o" aria-hidden="true"></i>4 orang</h6>
                    <h6><i class="fa fa-cogs" aria-hidden="true"></i>Manual</h6>
                    <h6><i class="fa fa-calendar-o" aria-hidden="true"></i>Tahun 2020</h6>
                    <button>Pilih Mobil</button>
                </div>`
                
                
                
                
                // `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
                // <h1>${element.manufacture} ${element.model} - ${element.year}</h1>
                // <img
                // class="car_image"
                //     src="./asset/${id %2 ==0 ? 'menu2': 'menu1'}.png"
                // />
                // <p style="text-align: center;color: aliceblue; font-size: 20px;">${element.description}</p>
                // </div>`

                body.appendChild(Car)
            });
}




