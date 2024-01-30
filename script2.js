


        let user = document.getElementById("user");
        let dropdown = document.getElementById("dropdown");
        let btn = document.getElementById("btn");
        let formbox = document.getElementsByClassName("formbox");


        user.onclick = function(){
            if(user.classList.contains("fa-bars")){
                user.classList.toggle("fa-xmark")
            }
         dropdown.classList.toggle("abc");
        }

        let imgslide = document.querySelectorAll(".img-slide");
        let prev = document.getElementById("prev")
        let next = document.getElementById("next")
        
        let slideindex = 1;
        showslide(slideindex);

        function controls(n){
            showslide(slideindex += n)
        }

        function showslide(n){
            if(n > imgslide.length){
                slideindex = 1
            }
            if(n < 1){
                slideindex = imgslide.length
            }

            for(let i=0; i<imgslide.length; i++){
                imgslide[i].style.display = "none"
            }
            imgslide[slideindex - 1].style.display = "block"
        }


        // testimoinial start here


        let testimonialscontainer  = document.getElementsByClassName("testimonials-container");
        let testimonialbox = document.getElementsByClassName("testimonial-box");
        let testimonialslideindex = 1;

        testimonialslide(testimonialslideindex);

        function testicontrol(n){
            testimonialslide(testimonialslideindex += n)

        }
        function testimonialslide(n){
            for (let i=0; i<testimonialbox.length; i++){
                testimonialbox[i].style.display = "none";
            }
            if(n > testimonialbox.length){
                testimonialslideindex = 1;
            }
            if(n < 1){
                testimonialslideindex =  testimonialbox.length
            }
            testimonialbox[testimonialslideindex-1].style.display = "block"
        }




        // Cart Script Start Here

        let cartbtn = document.getElementById("sagar")
        let cartcontainer = document.getElementById("cart-container");
        let cartclose = document.getElementsByClassName("cart-close")


        function cartfunction(){
            cartcontainer.style.display = "block"
        }

        // const product = [
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     },
        //     {
        //         id: "1",
        //         name: "nike",
        //         img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8d6ec7db-5575-462f-804c-8694044f4b06/tech-hera-shoes-JlV5km.png"
                
        //     }
        // ]
        //  let shop = document.getElementsByClassName("shop");
        //  shop.forEach(element => {
        //     element.addeventlistner("click",() => {
        //         console.log("hello")
        //     })
        //  });


    