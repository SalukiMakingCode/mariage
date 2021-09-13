let goto=0;
let yLeft=0;
let yRight=0;

function firstNavigation () {
   document.getElementById("btnAccueil").style.display = "none";
   document.getElementById("accueil").style.display = "none";
   document.getElementById("main").style.display = "flex";
   document.getElementById("gauche").style.display = "flex";
   document.getElementById("centre").style.display = "flex";
   document.getElementById("droite").style.display = "flex";
}

function doesGoTo () {
   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   if (x==="1" && y==="1") { goto="no"; }
   if (x==="1" && y==="2") { goto="no"; }
   if (x==="1" && y==="3") { goto="2"; }
   if (x==="1" && y==="4") { goto="no"; }
   if (x==="2" && y==="1") { goto="1"; }
   if (x==="2" && y==="2") { goto="no"; }
   if (x==="2" && y==="3") { goto="3"; }
   if (x==="2" && y==="4") { goto="no"; }
   if (x==="3" && y==="1") { goto="2"; }
   if (x==="3" && y==="2") { goto="no"; }
   if (x==="3" && y==="3") { goto="4"; }
   if (x==="3" && y==="4") { goto="no"; }
   if (x==="4" && y==="1") { goto="3"; }
   if (x==="4" && y==="2") { goto="no"; }
   if (x==="4" && y==="3") { goto="no"; }
   if (x==="4" && y==="4") { goto="no"; }
   if (goto==="no") { document.getElementById("goTo").style.display = "none"; }
   else { document.getElementById("goTo").style.display = "flex";}
}

function goGoGo () {
   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   if (x==="1" && y==="1") { goto="no"; }
   if (x==="1" && y==="2") { goto="no"; }
   if (x==="1" && y==="3") { goto="2"; }
   if (x==="1" && y==="4") { goto="no"; }
   if (x==="2" && y==="1") { goto="1"; }
   if (x==="2" && y==="2") { goto="no"; }
   if (x==="2" && y==="3") { goto="3"; }
   if (x==="2" && y==="4") { goto="no"; }
   if (x==="3" && y==="1") { goto="2"; }
   if (x==="3" && y==="2") { goto="no"; }
   if (x==="3" && y==="3") { goto="4"; }
   if (x==="3" && y==="4") { goto="no"; }
   if (x==="4" && y==="1") { goto="3"; }
   if (x==="4" && y==="2") { goto="no"; }
   if (x==="4" && y==="3") { goto="no"; }
   if (x==="4" && y==="4") { goto="no"; }
   if (goto!=="no") {
      centre.dataset.x=goto;
      if (y==="1") {yLeft="4";yRight="2"; }
      if (y==="2") {yLeft="1";yRight="3"; }
      if (y==="3") {yLeft="2";yRight="4"; }
      if (y==="4") {yLeft="3";yRight="1"; }
      document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+goto+"-"+yLeft+".jpg')";
      document.getElementById("centre").style.backgroundImage="url('./assets/img/"+goto+"-"+y+".jpg')";
      document.getElementById("droite").style.backgroundImage="url('./assets/img/"+goto+"-"+yRight+".jpg')";
   }
   doesGoTo();
}

function pivote(direction) {

   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   if (direction==="left") {
      switch (y) {
         case '1' :
            centre.dataset.y=4;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            doesGoTo ();
            break;
         case '2' :
            centre.dataset.y=1;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            doesGoTo ();
            break;
         case '3' :
            centre.dataset.y=2;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            doesGoTo ();
            break;
         case '4' :
            centre.dataset.y=3;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            doesGoTo ();
            break;
      }
   }
   if (direction==="right") {
      switch (y) {
         case '1' :
            centre.dataset.y=2;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            doesGoTo ();
            break;
         case '2' :
            centre.dataset.y=3;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            doesGoTo ();
            break;
         case '3' :
            centre.dataset.y=4;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-3.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            doesGoTo ();
            break;
         case '4' :
            centre.dataset.y=1;
            document.getElementById("gauche").style.backgroundImage="url('./assets/img/"+x+"-4.jpg')";
            document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-1.jpg')";
            document.getElementById("droite").style.backgroundImage="url('./assets/img/"+x+"-2.jpg')";
            doesGoTo ();
            break;
      }
   }
}

