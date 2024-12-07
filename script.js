const inputBox=document.getElementById("input-box");          // inputBox: Kullanıcının görev eklemek için yazı yazdığı giriş kutusunu seçer.
const listcontainer=document.getElementById("list-container");//listcontainer: Görevlerin ekleneceği listeyi(HTML elementini) seçer.
function addTask(){                                           //addTask: Yeni görev eklemek için kullanılan işlevdir
    if(inputBox.value === '')                                 //if (inputBox.value === ''): Eğer giriş kutusu boşsa, kullanıcıya bir uyarı verir.
    {
        alert("Boş Bırakamazsın! ");
    }
    else
    {
        let li =document.createElement("li");                //let li = document.createElement("li");: Yeni bir <li> (liste öğesi) oluşturur.
        li.innerHTML=inputBox.value;                         //li.innerHTML = inputBox.value;: Liste öğesinin içine giriş kutusundaki metni ekler.
        listcontainer.appendChild(li);                       //listcontainer.appendChild(li);: Bu liste öğesini mevcut listeye ekler.
        let span =document.createElement("span");            //let span = document.createElement("span");: Görevi silmek için bir <span> oluşturur.
        span.innerHTML="\u00d7";                             //span.innerHTML = "\u00d7";: Çarpı işareti (×) ekler.
        li.appendChild(span);                                //li.appendChild(span);: Çarpı işaretini liste öğesine ekler
    }
    inputBox.value= "";                                      //inputBox.value = "";: Giriş kutusunu temizler.
    saveData();                                              //saveData();: Görevlerin mevcut durumunu tarayıcıda saklamak için saveData işlevini çağırır.
}

listcontainer.addEventListener("click", function(e)         //listcontainer.addEventListener: Listeye tıklama olaylarını dinler.
{
    if(e.target.tagName === "LI")                           //if (e.target.tagName === "LI"): Eğer tıklanan öğe bir <li> ise:
    {
        e.target.classList.toggle("checked");               //Liste öğesine checked sınıfını ekler veya çıkarır.
        saveData();                                         // Değişikliği kaydeder.
    }
    else if(e.target.tagName === "SPAN")                    //Eğer tıklanan öğe bir <span> ise:
    {
        e.target.parentElement.remove();                    //Çarpı işaretine tıklanınca ilgili liste öğesini kaldırır.
    }
},false);

function saveData()                                        // Görev listesini tarayıcıda saklar
{
    localStorage.setItem("data",listcontainer.innerHTML);  //localStorage.setItem: Listeyi data anahtarıyla localStorage içinde saklar.
}

function showTask()                                        //Saklanan görevleri sayfa yüklendiğinde geri yükler
{
    listcontainer.innerHTML = localStorage.getItem("data");//Tarayıcıda saklanan data anahtarını alır ve liste içeriğine ekler.
}
showTask();