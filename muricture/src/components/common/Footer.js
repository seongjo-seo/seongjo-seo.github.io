

const Footer = () =>{
  return(
  <>
  <footer class="shadow-lg flex items-center justify-center shadow-md bg-gray-100 text-gray-500 py-4">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <p class="text-center text-gray-600">문의. Muricture@naver.com</p>
      <div class="flex justify-center items-center">
        <p class="px-2">&copy; 2023</p>
        <img class="h-4 w-auto" src="./img/Muricture.png" alt="logo" />
        <p class="text-center text-gray-600 ml-2"> All rights reserved.</p>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer;