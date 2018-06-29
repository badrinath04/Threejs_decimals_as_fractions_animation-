var div;

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'style.css');
document.getElementsByTagName('head')[0].appendChild(link);

function initialiseScene(){


}
var normal1,plane1,plane2,plane3,plane4,plane5,plane6,plane7,plane8,plane9,plane10,plane11,plane12,plane13,plane14,plane15,plane16,plane17,plane18,plane19,plane20,plane21,plane22,plane23,plane24;
var qt1,qt2,qt3,qt4,qt5,qt6,qt7,qt8,qt9,qt10,qt11,qt12,qt13,qt14,qt15,qt16,qt17,qt18,qt19,qt20,tryagain;
var qa1,qa2,qa3,qa4,qa5,qa6,qa7,qa8,qa9,qa10,qa11,qa12,qa13,qa14,qa15,qa16,qa17,qa18,qa19,qa20;
var qb1,qb2,qb3,qb4,qb5,qb6,qb7,qb8,qb9,qb10,qb11,qb12,qb13,qb14,qb15,qb16,qb17,qb18,qb19,qb20;
var think1,think2,think3,book,correct1,correct2,wrong2,wrong1,turnpage,passed;
var board,teacher,text1,decimalvalue,text1,text2,text3,text4,text5,text6,text7,text8,text9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,t57,t58,t59,t60;
function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("Decimals as Fractions");
    PIEsetDeveloperName("Bonthu Badrinath");
    
    initialiseHelp();
    initialiseInfo();

    initialiseScene();

     PIEscene.background=new THREE.Color( 0xDFE3D4 );
     PIEsetAreaOfInterest(-8, 8,8, -8);

     initialiseControls();
     initialiseOtherVariables();


     geometry=new THREE.PlaneGeometry(26,10);
    board=createMesh(geometry,"board2.png");
    board.position.set(2.5,1,0);
    PIEaddElement(board);
    board.visible=true;
    PIErender();


     geometry=new THREE.PlaneGeometry(7,16);
    teacher=createMesh(geometry,"teacher1.png");
    teacher.position.set(-12,-1,0);
    PIEaddElement(teacher);
    teacher.visible=true;
    PIErender();


    geometry=new THREE.PlaneGeometry(0.5,0.5);
    think1=createMesh(geometry,"think2.png");
    think1.position.set(-11,2.5,1);
    PIEaddElement(think1);
    think1.visible=true;
    PIErender();

    geometry=new THREE.PlaneGeometry(0.8,0.8);
    think2=createMesh(geometry,"think2.png");
    think2.position.set(-10.5,3.1,1);
    PIEaddElement(think2);
    think2.visible=true;
    PIErender();

    geometry=new THREE.PlaneGeometry(7,3.5);
    think3=createMesh(geometry,"think1.png");
    think3.position.set(-9,5.4,1);
    PIEaddElement(think3);
    think3.visible=true;
    PIErender();

     geometry=new THREE.PlaneGeometry(23,15);
    book=createMesh(geometry,"notebook1.png");
    book.position.set(-2,-0.5,0);
    PIEaddElement(book);
    book.visible=false;
    PIErender();


     geometry=new THREE.PlaneGeometry(2,2);
    correct1=createMesh(geometry,"correct.png");
    correct1.position.set(-6,0,1);
    PIEaddElement(correct1);
    correct1.visible=false;
    PIErender();



     geometry=new THREE.PlaneGeometry(2,2);
    wrong1=createMesh(geometry,"wrong.png");
    wrong1.position.set(-6,0,1);
    PIEaddElement(wrong1);
    wrong1.visible=false;
    PIErender();



    geometry=new THREE.PlaneGeometry(2,2);
    correct2=createMesh(geometry,"correct.png");
    correct2.position.set(6,0,1);
    PIEaddElement(correct2);
    correct2.visible=false;
    PIErender();



    geometry=new THREE.PlaneGeometry(2,2);
    wrong2=createMesh(geometry,"wrong.png");
    wrong2.position.set(6,0,1);
    PIEaddElement(wrong2);
    wrong2.visible=false;
    PIErender();


    geometry=new THREE.PlaneGeometry(6,0.8);
    turnpage=createMesh(geometry,"turnpage.png");
    turnpage.position.set(4,-5,2);
    PIEaddElement(turnpage);
    PIEsetClick(turnpage,turning);
    turnpage.visible=false;
    PIErender();


    geometry=new THREE.PlaneGeometry(6,3.5);
    passed=createMesh(geometry,"passed.png");
    passed.position.set(4,-4,2);
    PIEaddElement(passed);
    //PIEsetClick(turnpa,turning);
    passed.visible=false;
    PIErender();







    flag1=0;
    flag=0;
    next1();
    // placevalue1();
    // quiztest();



   //loaddata();
    
    
  

   PIEstartAnimation();

        
}


function loaddata(){

flag=1;
flag1=0;



 var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray1 = [materialSide1 ];
    var loader = new THREE.FontLoader();


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Start the Experiment", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t43 = new THREE.Mesh(textGeom, textMaterial );
        t43.position.set(-11.6,5.4,2);
        t43.visible=true;
        PIEaddElement(t43);
        PIErender();
    });



    var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();


      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" How to represent a decimal number as a fraction?  ", 
        {
            size: 0.5, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text = new THREE.Mesh(textGeom, textMaterial );
        text.position.set(-5,4.5,1);
        text.visible=false;
        PIEaddElement(text);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal Number : ", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text1 = new THREE.Mesh(textGeom, textMaterial );
        text1.position.set(-2,3.5,1);
        text1.visible=false;
        PIEaddElement(text1);
        PIErender();
    });

//next1();
     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(highlightedNumber, 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        decimalvalue = new THREE.Mesh(textGeom, textMaterial );
        decimalvalue.position.set(3,3.45,1);
        decimalvalue.visible=false;
        PIEaddElement(decimalvalue);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("lets take the decimal part : ", 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text2 = new THREE.Mesh(textGeom, textMaterial );
        text2.position.set(-9,2.5,1);
        text2.visible=false;
        PIEaddElement(text2);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text3 = new THREE.Mesh(textGeom, textMaterial );
        text3.position.set(-3,2.5,1);
        text3.visible=false;
        PIEaddElement(text3);
        PIErender();
    });

       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text5 = new THREE.Mesh(textGeom, textMaterial );
        text5.position.set(-1.8,2.5,1);
        text5.visible=false;
        PIEaddElement(text5);
        PIErender();
    });


          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text6 = new THREE.Mesh(textGeom, textMaterial );
        text6.position.set(-1.3,2.5,1);
        text6.visible=false;
        PIEaddElement(text6);
        PIErender();
    });

           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('/1', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text7 = new THREE.Mesh(textGeom, textMaterial );
        text7.position.set(-0.2,2.5,1);
        text7.visible=false;
        PIEaddElement(text7);
        PIErender();
    });

           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text8 = new THREE.Mesh(textGeom, textMaterial );
        text8.position.set(-1.8,1.7,1);
        text8.visible=false;
        PIEaddElement(text8);
        PIErender();
    });


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        text9 = new THREE.Mesh(textGeom, textMaterial );
        text9.position.set(-1.3,1.7,1);
        text9.visible=false;
        PIEaddElement(text9);
        PIErender();
    });    


           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('/1', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t10 = new THREE.Mesh(textGeom, textMaterial );
        t10.position.set(-0.2,1.7,1);
        t10.visible=false;
        PIEaddElement(t10);
        PIErender();
    });

           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('X', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t11 = new THREE.Mesh(textGeom, textMaterial );
        t11.position.set(0.4,1.7,1);
        t11.visible=false;
        PIEaddElement(t11);
        PIErender();
    });


           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t12 = new THREE.Mesh(textGeom, textMaterial );
        t12.position.set(1,1.7,1);
        t12.visible=false;
        PIEaddElement(t12);
        PIErender();
    });    

           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('/', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t13 = new THREE.Mesh(textGeom, textMaterial );
        t13.position.set(2.0,1.7,1);
        t13.visible=false;
        PIEaddElement(t13);
        PIErender();
    });

            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t14 = new THREE.Mesh(textGeom, textMaterial );
        t14.position.set(2.2,1.7,1);
        t14.visible=false;
        PIEaddElement(t14);
        PIErender();
    });
            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t49 = new THREE.Mesh(textGeom, textMaterial );
        t49.position.set(-1.8,0.9,1);
        t49.visible=false;
        PIEaddElement(t49);
        PIErender();
    });         



            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor*integerp, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t15 = new THREE.Mesh(textGeom, textMaterial );
        t15.position.set(-1.3,0.9,1);
        t15.visible=false;
        PIEaddElement(t15);
        PIErender();
    });            



            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('/', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t16 = new THREE.Mesh(textGeom, textMaterial );
        t16.position.set(-0.5,0.9,1);
        t16.visible=false;
        PIEaddElement(t16);
        PIErender();
    });  


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t17 = new THREE.Mesh(textGeom, textMaterial );
        t17.position.set(-0.2,0.9,1);
        t17.visible=false;
        PIEaddElement(t17);
        PIErender();
    });         


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t18 = new THREE.Mesh(textGeom, textMaterial );
        t18.position.set(-1.8,0.1,1);
        t18.visible=false;
        PIEaddElement(t18);
        PIErender();
    }); 

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp*mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t19 = new THREE.Mesh(textGeom, textMaterial );
        t19.position.set(-1.3,0.1,1);
        t19.visible=false;
        PIEaddElement(t19);
        PIErender();
    });      


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('/', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t20 = new THREE.Mesh(textGeom, textMaterial );
        t20.position.set(-0.5,0.1,1);
        t20.visible=false;
        PIEaddElement(t20);
        PIErender();
    });  

 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t21 = new THREE.Mesh(textGeom, textMaterial );
        t21.position.set(-0.2,0.1,1);
        t21.visible=false;
        PIEaddElement(t21);
        PIErender();
    });




 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Reduced fraction", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t22 = new THREE.Mesh(textGeom, textMaterial );
        t22.position.set(-5.2,0.1,1);
        t22.visible=false;
        PIEaddElement(t22);
        PIErender();
    }); 



 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Total mixed fraction", 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t23 = new THREE.Mesh(textGeom, textMaterial );
        t23.position.set(-6.4,-0.8,1);
        t23.visible=false;
        PIEaddElement(t23);
        PIErender();
    }); 




       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t25 = new THREE.Mesh(textGeom, textMaterial );
        t25.position.set(-1.8,-0.8,1);
        t25.visible=false;
        PIEaddElement(t25);
        PIErender();
    }); 


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerd, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t26 = new THREE.Mesh(textGeom, textMaterial );
        t26.position.set(-1.3,-0.8,1);
        t26.visible=false;
        PIEaddElement(t26);
        PIErender();
    }); 



 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp*mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t27 = new THREE.Mesh(textGeom, textMaterial );
        t27.position.set(-0.4,-0.6,1);
        t27.visible=false;
        PIEaddElement(t27);
        PIErender();
    }); 

  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("____", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t28 = new THREE.Mesh(textGeom, textMaterial );
        t28.position.set(-0.5,-0.7,1);
        t28.visible=false;
        PIEaddElement(t28);
        PIErender();
    }); 



   loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t29 = new THREE.Mesh(textGeom, textMaterial );
        t29.position.set(-0.4,-1.3,1);
        t29.visible=false;
        PIEaddElement(t29);
        PIErender();
    }); 



 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Total fraction", 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t30 = new THREE.Mesh(textGeom, textMaterial );
        t30.position.set(4.5,-0.8,1);
        t30.visible=false;
        PIEaddElement(t30);
        PIErender();
    }); 

 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t31 = new THREE.Mesh(textGeom, textMaterial );
        t31.position.set(7.5,-0.8,1);
        t31.visible=false;
        PIEaddElement(t31);
        PIErender();
    }); 


  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerd, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t32 = new THREE.Mesh(textGeom, textMaterial );
        t32.position.set(8.1,-0.5,1);
        t32.visible=false;
        PIEaddElement(t32);
        PIErender();
    }); 


   loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('x', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t33 = new THREE.Mesh(textGeom, textMaterial );
        t33.position.set(8.7,-0.5,1);
        t33.visible=false;
        PIEaddElement(t33);
        PIErender();
    }); 


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t34 = new THREE.Mesh(textGeom, textMaterial );
        t34.position.set(9.1,-0.5,1);
        t34.visible=false;
        PIEaddElement(t34);
        PIErender();
    }); 


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry('+', 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t35 = new THREE.Mesh(textGeom, textMaterial );
        t35.position.set(10,-0.5,1);
        t35.visible=false;
        PIEaddElement(t35);
        PIErender();
    }); 

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp*mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t36 = new THREE.Mesh(textGeom, textMaterial );
        t36.position.set(10.4,-0.5,1);
        t36.visible=false;
        PIEaddElement(t36);
         }); 


      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("________________", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t37 = new THREE.Mesh(textGeom, textMaterial );
        t37.position.set(8.1,-0.7,1);
        t37.visible=false;
        PIEaddElement(t37);
        PIErender();
    }); 



   loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t38 = new THREE.Mesh(textGeom, textMaterial );
        t38.position.set(8.9,-1.3,1);
        t38.visible=false;
        PIEaddElement(t38);
        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("=", 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t39 = new THREE.Mesh(textGeom, textMaterial );
        t39.position.set(11.5,-0.8,1);
        t39.visible=false;
        PIEaddElement(t39);
        PIErender();
    }); 


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry((integerd*mulfactor/divfactor)+(integerp*mulfactor/divfactor), 
        {
            size: 0.35, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t40 = new THREE.Mesh(textGeom, textMaterial );
        t40.position.set(12.2,-0.5,1);
        t40.visible=false;
        PIEaddElement(t40);
        PIErender();
    }); 



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("_______", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t41 = new THREE.Mesh(textGeom, textMaterial );
        t41.position.set(12.2,-0.7,1);
        t41.visible=false;
        PIEaddElement(t41);
        PIErender();
    }); 

       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t42 = new THREE.Mesh(textGeom, textMaterial );
        t42.position.set(12.5,-1.3,1);
        t42.visible=false;
        PIEaddElement(t42);
        PIErender();
    });





       var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray1 = [materialSide1 ];
    var loader = new THREE.FontLoader();

         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("After decimal point it has ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t44 = new THREE.Mesh(textGeom, textMaterial );
        t44.position.set(-11.6,5.4,2);
        t44.visible=false;
        PIEaddElement(t44);
        PIErender();
    });


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(lengthp1, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t45 = new THREE.Mesh(textGeom, textMaterial );
        t45.position.set(-6.7,5.4,2);
        t45.visible=false;
        PIEaddElement(t45);
        PIErender();
    });

         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("digits, so multiply numerator", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t46 = new THREE.Mesh(textGeom, textMaterial );
        t46.position.set(-11.3,4.9,2);
        t46.visible=false;
        PIEaddElement(t46);
        PIErender();
    });

          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("and denominator with ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t47 = new THREE.Mesh(textGeom, textMaterial );
        t47.position.set(-11.2,4.3,2);
        t47.visible=false;
        PIEaddElement(t47);
        PIErender();
    });


            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t48 = new THREE.Mesh(textGeom, textMaterial );
        t48.position.set(-6.9,4.3,2);
        t48.visible=false;
        PIEaddElement(t48);
        PIErender();
    });



            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("the greatest common divisor", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t57 = new THREE.Mesh(textGeom, textMaterial );
        t57.position.set(-11.7,5.7,2);
        t57.visible=false;
        PIEaddElement(t57);
        PIErender();
    });

            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("of          ,           is", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t50 = new THREE.Mesh(textGeom, textMaterial );
        t50.position.set(-11.5,5.2,2);
        t50.visible=false;
        PIEaddElement(t50);
        PIErender();
    });

            loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp*mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t51 = new THREE.Mesh(textGeom, textMaterial );
        t51.position.set(-10.9,5.2,2);
        t51.visible=false;
        PIEaddElement(t51);
        PIErender();
    });

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t52 = new THREE.Mesh(textGeom, textMaterial );
        t52.position.set(-9.8,5.2,2);
        t52.visible=false;
        PIEaddElement(t52);
        PIErender();
    });

         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t53 = new THREE.Mesh(textGeom, textMaterial );
        t53.position.set(-8.2,5.2,2);
        t53.visible=false;
        PIEaddElement(t53);
        PIErender();
    });

          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(". So lets", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t54 = new THREE.Mesh(textGeom, textMaterial );
        t54.position.set(-7.9,5.2,2);
        t54.visible=false;
        PIEaddElement(t54);
        PIErender();
    });        


  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("divide the fraction with ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t55 = new THREE.Mesh(textGeom, textMaterial );
        t55.position.set(-11.2,4.7,2);
        t55.visible=false;
        PIEaddElement(t55);
        PIErender();
    });   


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t56 = new THREE.Mesh(textGeom, textMaterial );
        t56.position.set(-6.7,4.7,2);
        t56.visible=false;
        PIEaddElement(t56);
        PIErender();
    });        

//58 - 65 .................


 loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal number : ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t58 = new THREE.Mesh(textGeom, textMaterial );
        t58.position.set(-11.7,5.7,2);
        t58.visible=false;
        PIEaddElement(t58);
        PIErender();
    });     

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(highlightedNumber, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t59 = new THREE.Mesh(textGeom, textMaterial );
        t59.position.set(-8,5.7,2);
        t59.visible=false;
        PIEaddElement(t59);
        PIErender();
    });        

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("integer part : ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t60 = new THREE.Mesh(textGeom, textMaterial );
        t60.position.set(-11.3,5.1,2);
        t60.visible=false;
        PIEaddElement(t60);
        PIErender();
    });       

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerd, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t61 = new THREE.Mesh(textGeom, textMaterial );
        t61.position.set(-8.5,5.1,2);
        t61.visible=false;
        PIEaddElement(t61);
        PIErender();
    });   

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal part :         =      /", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t62 = new THREE.Mesh(textGeom, textMaterial );
        t62.position.set(-11.3,4.4,2);
        t62.visible=false;
        PIEaddElement(t62);
        PIErender();
    });   


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t63 = new THREE.Mesh(textGeom, textMaterial );
        t63.position.set(-8.6,4.4,2);
        t63.visible=false;
        PIEaddElement(t63);
        PIErender();
    });        

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(integerp*mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t64 = new THREE.Mesh(textGeom, textMaterial );
        t64.position.set(-7.3,4.4,2);
        t64.visible=false;
        PIEaddElement(t64);
        PIErender();
    });      


        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(mulfactor/divfactor, 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t65 = new THREE.Mesh(textGeom, textMaterial );
        t65.position.set(-6.5,4.4,2);
        t65.visible=false;
        PIEaddElement(t65);
        PIErender();
    });        


 var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x168e1e} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();


        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Click next:For another example", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
        t66 = new THREE.Mesh(textGeom, textMaterial );
        t66.position.set(-11.5,5.1,2);
        t66.visible=false;
        PIEaddElement(t66);
        PIErender();
    });        


loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Click Learn:To learn about", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
        h66 = new THREE.Mesh(textGeom, textMaterial );
        h66.position.set(-11.2,4.5,2);
        h66.visible=false;
        PIEaddElement(h66);
        PIErender();
    });     


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("decimal place value", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
        h67 = new THREE.Mesh(textGeom, textMaterial );
        h67.position.set(-10,4.1,2);
        h67.visible=false;
        PIEaddElement(h67);
        PIErender();
    });        



}

var h66;

 function gcd(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};




function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}
var min,max,highlightedNumber,integerp,int2,integerd,lengthd,lengthp,lengthp1,thousands1,hundreds1,tens1,ones1,onetenths1,onehundreds1,onethousands1,mulfactor,divfactor;
var count;
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}



function resetdata(){
  text.visible=false;
    decimalvalue.visible=false;
    text1.visible=false;
    text2.visible=false;
    text3.visible=false;
    text5.visible=false;
    text6.visible=false;
    text7.visible=false;
    text8.visible=false;
    text9.visible=false;
    t10.visible=false;
    t11.visible=false;
    t12.visible=false;
    t13.visible=false;
    t14.visible=false;
    t49.visible=false;
    t15.visible=false;
    t16.visible=false;
    t17.visible=false;
    t18.visible=false;
    t19.visible=false;
    t20.visible=false;
    t21.visible=false;
    t22.visible=false;
    t23.visible=false;
    t25.visible=false;
    t26.visible=false;
    t27.visible=false;
    t28.visible=false;
    t29.visible=false;
    t30.visible=false;
    t31.visible=false;
    t32.visible=false;
    t33.visible=false;
    t34.visible=false;
    t35.visible=false;
    t36.visible=false;
    t37.visible=false;
    t38.visible=false;
    t39.visible=false;
    t40.visible=false;
    t41.visible=false;
    t42.visible=false;
    t44.visible=false;
    t45.visible=false;
    t46.visible=false;
    t47.visible=false;
    t48.visible=false;
    t57.visible=false;
    t50.visible=false;
    t51.visible=false;
    t52.visible=false;
    t53.visible=false;
    t54.visible=false;
    t55.visible=false;
    t56.visible=false;
    t58.visible=false;
    t59.visible=false;
    t60.visible=false;
    t61.visible=false;
    t62.visible=false;
    t63.visible=false;
    t64.visible=false;
    t65.visible=false;
    t66.visible=false;
    h66.visible=false;
    h67.visible=false;
    t43.visible=false;
    think1.visible=true;
    think2.visible=true;
    think3.visible=true;
    PIEstopAnimation();
}

var flag;

function next1(){


//PIEstartAnimation();
 think1.visible=true;
    think2.visible=true;
    think3.visible=true;

    if (flag1==1) {
        resetdata1();
    }
    else if (flag1==2) {
        teacher.visible=true;
    board.visible=true;
    PIErender();

    resetquiz1();
    resetquiz2();
    resetquiz3();
    resetquiz4();
    resetquiz5();
    resetquiz6();

    book.visible=false;
    passed.visible=false;
    turnpage.visible=false;
    PIErender();

    
    PIEstopAnimation();
}


//resetdata();

  
    count=0;
	min = 1.000;
    max = 99.99;
    highlightedNumber = Math.random() * (max - min) + min;
    highlightedNumber=precisionRound(highlightedNumber, 3);
    integerd=Math.floor(highlightedNumber);
    console.log(integerd);
    integerp=highlightedNumber-Math.floor(highlightedNumber);
    integerp=precisionRound(integerp,3);
    console.log(integerp);
    lengthd=integerd.toString();
    console.log(lengthd.length);
    lengthp=integerp.toString();
    console.log((lengthp.length)-2);
    lengthp1=((lengthp.length)-2);

    if (lengthp1==2) {
    	mulfactor=100;
    }
    else if (lengthp1==3) {
    	mulfactor=1000;
    }
    thousands1=Math.floor(integerd/1000);
    console.log(thousands1);
    hundreds1=(Math.floor(integerd/100)-(thousands1*10));
    console.log(hundreds1);
    tens1=((Math.floor(integerd/10))-(thousands1*100)-(hundreds1*10));
    console.log(tens1);
    ones1=(integerd-(thousands1*1000)-(hundreds1*100)-(tens1*10));
    console.log(ones1);

    onetenths1=(Math.floor(integerp*10));
    console.log(onetenths1);
    onehundreds1=((Math.floor(integerp*100))-(onetenths1*10));
    console.log(onehundreds1);
    onethousands1=(integerp*1000)-(onetenths1*100)-(onehundreds1*10);
    console.log(onethousands1);

    divfactor=gcd(mulfactor*integerp,mulfactor);
    console.log("ddddddddddddd");
    console.log(divfactor);


    flag1=0;
if (flag==1) {
    resetdata();
}

loaddata();
}






var play=1;
var anglelist=0;

function updateExperimentElements(t, dt){
    var boundary=dt/1000;
    var play_time = t/1000;

    if (play==0 && flag1==0) {


        t43.visible=false;
        count++;
//console.log(count/60);
        if (count==60) {
            t43.visible=false;
            text.visible=true;
            think1.visible=false;
            think2.visible=false;
            think3.visible=false;
        }
        else if (count==60*3) {
            text1.visible=true;
        }
        else if (count==60*5) {
            decimalvalue.visible=true;
        }

        else if (count==60*7) {
            text2.visible=true;
        }

         else if (count==60*9) {
            text3.visible=true;
        }

         else if (count==60*11) {
            text5.visible=true;
        }
         else if (count==60*13) {
            text6.visible=true;
        }

        else if (count==60*15) {
            text7.visible=true;
        }
        else if (count==60*18) {
            text8.visible=true;
        }

         else if (count==60*18.4) {
            think1.visible=true;
        }

         else if (count==60*18.8) {
            think2.visible=true;
        }

         else if (count==60*19.2) {
            think3.visible=true;
        }

         else if (count==60*20) {
            t44.visible=true;
            t45.visible=true;
            t46.visible=true;
            t47.visible=true;
            t48.visible=true;
        }

        else if (anglelist==0 && count==60*20.2 ) {
            placevalue1();
            PIErender();
            PIErender();
            quiztest();
            PIErender();
            anglelist=1;
            PIEaddInputCommand('Learn : Decimal place value', placevalue);
          //PIEaddDualCommand('Quiz', quiz1);
          PIEaddInputCommand('Quiz', quiz);
            //PIEstopAnimation();
        }

        else if (count==60*21) {
            text9.visible=true;
        }
        else if (count==60*22) {
            t10.visible=true;
        }

        else if (count==60*23) {
            t11.visible=true;
        }

        else if (count==60*24) {
            t12.visible=true;
        }
        else if (count==60*25) {
            t13.visible=true;
        }

         else if (count==60*26) {
            t14.visible=true;
        }
        else if (count==60*27) {
            t49.visible=true;
        }
        else if (count==60*28) {
            t15.visible=true;
        }
        else if (count==60*29) {
            t16.visible=true;
        }
        else if (count==60*31) {
            t17.visible=true;
            think1.visible=false;
            think2.visible=false;
            think3.visible=false;
            t44.visible=false;
            t45.visible=false;
            t46.visible=false;
            t47.visible=false;
            t48.visible=false;
        }

        else if (count==60*32) {
            t22.visible=true;
        }

         else if (count==60*33) {
            t18.visible=true;
        }

         else if (count==60*34.4) {
            think1.visible=true;
        }

        else if (count==60*34.8) {
            think2.visible=true;
        }
         else if (count==60*35.2) {
            think3.visible=true;
        }

           else if (count==60*35.7) {
             t57.visible=true;
             t50.visible=true;
             t51.visible=true;
             t52.visible=true;
             t53.visible=true;
             t54.visible=true;
             t55.visible=true;
             t56.visible=true;
         }
         else if (count==60*37) {
            t19.visible=true;
        }
         else if (count==60*38) {
            t20.visible=true;
        }
         else if (count==60*39) {
            t21.visible=true;
        }

        else if (count==60*40) {
            t23.visible=true;
        }
        else if (count==60*41) {
            t25.visible=true;
            t57.visible=false;
             t50.visible=false;
             t51.visible=false;
             t52.visible=false;
             t53.visible=false;
             t54.visible=false;
             t55.visible=false;
             t56.visible=false;
             think1.visible=false;
            think2.visible=false;
            think3.visible=false;
        }

         else if (count==60*42) {
            t25.visible=true;
        }


         else if (count==60*42.4) {
            think1.visible=true;
        }

        else if (count==60*42.8) {
            think2.visible=true;
        }
         else if (count==60*43.2) {
            think3.visible=true;
        }

        else if (count==60*43.7) {
             t58.visible=true;
             t59.visible=true;
             t60.visible=true;
             t61.visible=true;
             t62.visible=true;
             t63.visible=true;
             t64.visible=true;
             t65.visible=true;
        }

         else if (count==60*47) {
            t26.visible=true;
        }

        else if (count==60*48) {
            t27.visible=true;
            t28.visible=true;
            t29.visible=true;
        }


         else if (count==60*49) {
            t30.visible=true;
            t31.visible=true;
        }

        else if (count==60*50) {
            t32.visible=true;
        }

        else if (count==60*50.4) {
            t33.visible=true;
        }
        else if (count==60*50.8) {
            t34.visible=true;
        }
        else if (count==60*51.2) {
            t35.visible=true;
        }
        else if (count==60*51.6) {
            t36.visible=true;
        }

        else if (count==60*52) {
            t37.visible=true;
            t38.visible=true;
        }

        else if (count==60*52.4) {
            t39.visible=true;
            
        }

        else if (count==60*52.8) {
            t40.visible=true;
        }


        else if (count==60*53.2) {
            t41.visible=true;
            t42.visible=true;
        }

        else if (count==60*54) {
             t58.visible=false;
             t59.visible=false;
             t60.visible=false;
             t61.visible=false;
             t62.visible=false;
             t63.visible=false;
             t64.visible=false;
             t65.visible=false;
             think1.visible=false;
            think2.visible=false;
            think3.visible=false;
          
        }

        else if (count==60*55.8) {
            think1.visible=true;
        }
        else if (count==60*56.2) {
            think2.visible=true;
        }
        else if (count==60*56.7) {
            think3.visible=true;
        }
        else if (count==60*57) {
              t66.visible=true;
              h66.visible=true;
              h67.visible=true;
          PIEstopAnimation();
        }

        



}



else if (play==0 && flag1==1) {
    t43.visible=false;
    count++;
    if (count==60) {
        t70.visible=true;
        think1.visible=false;
        think2.visible=false;
        think3.visible=false;
    }

    else if (count==60*2) {
        t71.visible=true;
    }

    else if (count==60*3) {
        t73.visible=true;
    }

     else if (count==60*5) {
        t74.visible=true;
    }

      else if (count==60*6) {
        think1.visible=true;
    }
     else if (count==60*6.4) {
        think2.visible=true;
    }

     else if (count==60*6.8) {
        think3.visible=true;
    }

     else if (count==60*7.2) {
        t85.visible=true;
    }

       else if (count==60*8.5) {
        arrowHelper3.visible=true;
    }

     else if (count==60*9) {
        t75.visible=true;
    }

     else if (count==60*10.5) {
        arrowHelper2.visible=true;
    }
    else if (count==60*11) {
        t76.visible=true;
    }

    else if (count==60*12.5) {
            arrowHelper1.visible=true;
        }
    else if (count==60*13) {
            t77.visible=true;
        }
    else if (count==60*14.5) {
            arrowHelper7.visible=true;
        }
    else if (count==60*15) {
           t78.visible=true;
        }

     else if (count==60*16.5) {
           arrowHelper8.visible=true;
        }   
     else if (count==60*17) {
           t79.visible=true;
        }   
     else if (count==60*18.5) {
           arrowHelper9.visible=true;
        }
     else if (count==60*19) {
           t86.visible=true;
        }   
     else if (count==60*20.5) {
           arrowHelper4.visible=true;
        }
     else if (count==60*21) {
        t87.visible=true;
        }
     else if(count==60*22.5){
           arrowHelper10.visible=true;
        }
        
     else if (count==60*23) {
           t80.visible=true;
        }
     else if (count==60*24.5) {
           arrowHelper5.visible=true;
        }   
     else if (count==60*25) {
           t81.visible=true;
        }

     else if (count==60*26.5) {
           arrowHelper6.visible=true;
        }   
     else if (count==60*27) {
           t82.visible=true;
        }
    else if (count==60*29.5) {
           t83.visible=true;
        }

     else if (count==60*31) {
           t84.visible=true;
           think1.visible=false;
           think2.visible=false;
           think3.visible=false;
           t85.visible=false;
        }   
        else if (count==60*33) {
            think1.visible=true;
        }
        else if (count==60*33.4) {
            think2.visible=true;
        }
        else if (count==60*33.9) {
            think3.visible=true;
        }
        else if (count==60*35) {
            t88.visible=true;
            PIEstopAnimation();
        }




   



}
    

     if(play_time >= 0.49 && play==1){
        PIEstopAnimation();
        play=0;

        
        }

}

var t70,t71,t72,t73,t74,t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90;
var flag1;
var h66,h67;






function placevalue(){
//PIEstartAnimation();
count=0;

    
 
    think1.visible=true;
    think2.visible=true;
    think3.visible=true;


 // var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
 //    var materialArray1 = [materialSide1 ];
 //    var loader = new THREE.FontLoader();


 //       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
 //        var textGeom = new THREE.TextGeometry("Start the Experiment", 
 //        {
 //            size: 0.4, height: 0,
 //            font: font, weight: "normal", style: "normal"
 //        });  
 //    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
 //        t43 = new THREE.Mesh(textGeom, textMaterial );
 //        t43.position.set(-11.6,5.4,2);
 //        t43.visible=true;
 //        PIEaddElement(t43);
 //        PIErender();
 //    });
t43.visible=true;
PIErender();

if (flag1==1) {
    resetdata1();
}


else if (flag1==2) {
    resetquiz1();
    resetquiz2();
    resetquiz3();
    resetquiz4();
    resetquiz5();
    resetquiz6();

    book.visible=false;
    passed.visible=false;
    turnpage.visible=false;
    PIErender();

    teacher.visible=true;
    board.visible=true;
    PIEstopAnimation();
}

if (flag==1) {
    resetdata();
}

    flag1=1;
    count=0;
    

t43.visible=true;
PIErender();
}

function placevalue1(){


     var materialSide = new THREE.MeshBasicMaterial( { color: 0xffffff} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();


loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" How to find decimal place value of a digit in a decimal number?   ", 
        {
            size: 0.45, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t70 = new THREE.Mesh(textGeom, textMaterial );
        t70.position.set(-5.5,4.5,1);
        t70.visible=false;
        PIEaddElement(t70);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Lets take a decimal Number  :  ", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t71 = new THREE.Mesh(textGeom, textMaterial );
        t71.position.set(-4,3.5,1);
        t71.visible=false;
        PIEaddElement(t71);
        PIErender();
    });

//next1();
     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("97325.1486", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t73 = new THREE.Mesh(textGeom, textMaterial );
        t73.position.set(4,3.45,1);
        t73.visible=false;
        PIEaddElement(t73);
        PIErender();
    });


     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("9         7         3         2         5         .         1         4         8         6", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t74 = new THREE.Mesh(textGeom, textMaterial );
        t74.position.set(-5,2.4,1);
        t74.visible=false;
        PIEaddElement(t74);
        PIErender();
    });


//tens
 var from1 = new THREE.Vector3( 0.1,1, 1);
 var to1 = new THREE.Vector3( 0.1,2.3,1);
    var direction1 = to1.clone().sub(from1);
    var length1 = direction1.length();
    arrowHelper1 = new THREE.ArrowHelper(direction1.normalize(), from1, length1, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper1);
    arrowHelper1.visible=false;

//ones
 var from2 = new THREE.Vector3( 1.7,0.2, 1);
 var to2 = new THREE.Vector3( 1.7,2.3,1);
    var direction2 = to2.clone().sub(from2);
    var length2 = direction2.length();
    arrowHelper2 = new THREE.ArrowHelper(direction2.normalize(), from2, length2, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper2);
    arrowHelper2.visible=false;


//decimal point
 var from3 = new THREE.Vector3( 3.3,1, 1);
 var to3 = new THREE.Vector3( 3.3,2.3,1);
    var direction3 = to3.clone().sub(from3);
    var length3 = direction3.length();
    arrowHelper3 = new THREE.ArrowHelper(direction3.normalize(), from3, length3, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper3);
    arrowHelper3.visible=false;


//tenths 1/10
 var from4 = new THREE.Vector3( 4.9,0.2, 1);
 var to4 = new THREE.Vector3( 4.9,2.3,1);
    var direction4 = to4.clone().sub(from4);
    var length4 = direction4.length();
    arrowHelper4 = new THREE.ArrowHelper(direction4.normalize(), from4, length4, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper4);
    arrowHelper4.visible=false;


//hundredths 1/100
 var from10 = new THREE.Vector3( 6.5,1, 1);
 var to10 = new THREE.Vector3( 6.5,2.3,1);
    var direction10 = to10.clone().sub(from10);
    var length10 = direction10.length();
    arrowHelper10 = new THREE.ArrowHelper(direction10.normalize(), from10, length10, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper10);
    arrowHelper10.visible=false;


//thousandths 1/1000
     var from5 = new THREE.Vector3( 8.2,0.2, 1);
 var to5 = new THREE.Vector3( 8.2,2.3,1);
    var direction5 = to5.clone().sub(from5);
    var length5 = direction5.length();
    arrowHelper5 = new THREE.ArrowHelper(direction5.normalize(), from5, length5, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper5);
    arrowHelper5.visible=false;

//ten thousandths  1/10000
 var from6 = new THREE.Vector3( 9.8,1, 1);
 var to6 = new THREE.Vector3( 9.8,2.3,1);
    var direction6 = to6.clone().sub(from6);
    var length6 = direction6.length();
    arrowHelper6 = new THREE.ArrowHelper(direction6.normalize(), from6, length6, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper6);
    arrowHelper6.visible=false;

//houndreds
 var from7 = new THREE.Vector3( -1.6,0.2, 1);
 var to7 = new THREE.Vector3( -1.6,2.3,1);
    var direction7 = to7.clone().sub(from7);
    var length7 = direction7.length();
    arrowHelper7 = new THREE.ArrowHelper(direction7.normalize(), from7, length7, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper7);
    arrowHelper7.visible=false;

//thousands
 var from8 = new THREE.Vector3( -3.2,1, 1);
 var to8 = new THREE.Vector3( -3.2,2.3,1);
    var direction8 = to8.clone().sub(from8);
    var length8 = direction8.length();
    arrowHelper8 = new THREE.ArrowHelper(direction8.normalize(), from8, length8, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper8);
    arrowHelper8.visible=false;

//ten thousand
 var from9 = new THREE.Vector3( -4.9,0.2, 1);
 var to9 = new THREE.Vector3( -4.9,2.3,1);
    var direction9 = to9.clone().sub(from9);
    var length9 = direction9.length();
    arrowHelper9 = new THREE.ArrowHelper(direction9.normalize(), from9, length9, 0x27c6af,0.3,0.3 );
    PIEaddElement(arrowHelper9);
    arrowHelper9.visible=false;



     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal point", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t75 = new THREE.Mesh(textGeom, textMaterial );
        t75.position.set(2.3,0.5,1);
        t75.visible=false;
        PIEaddElement(t75);
        PIErender();
    });


          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Ones", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t76 = new THREE.Mesh(textGeom, textMaterial );
        t76.position.set(1.5,-0.2,1);
        t76.visible=false;
        PIEaddElement(t76);
        PIErender();
    });



           loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Tens", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t77 = new THREE.Mesh(textGeom, textMaterial );
        t77.position.set(-0.1,0.5,1);
        t77.visible=false;
        PIEaddElement(t77);
        PIErender();
    });



          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Hundreds", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t78 = new THREE.Mesh(textGeom, textMaterial );
        t78.position.set(-1.9,-0.2,1);
        t78.visible=false;
        PIEaddElement(t78);
        PIErender();
    });


   loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Thousands", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t79 = new THREE.Mesh(textGeom, textMaterial );
        t79.position.set(-3.7,0.5,1);
        t79.visible=false;
        PIEaddElement(t79);
        PIErender();
    });

  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Ten thousands", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t86 = new THREE.Mesh(textGeom, textMaterial );
        t86.position.set(-5.6,-0.2,1);
        t86.visible=false;
        PIEaddElement(t86);
        PIErender();
    });




          loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Tenths", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t87 = new THREE.Mesh(textGeom, textMaterial );
        t87.position.set(4.4,-0.2,1);
        t87.visible=false;
        PIEaddElement(t87);
        PIErender();
    });



     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Hundredths", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t80 = new THREE.Mesh(textGeom, textMaterial );
        t80.position.set(6,0.5,1);
        t80.visible=false;
        PIEaddElement(t80);
        PIErender();
    });


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Thousandths", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t81 = new THREE.Mesh(textGeom, textMaterial );
        t81.position.set(7.8,-0.2,1);
        t81.visible=false;
        PIEaddElement(t81);
        PIErender();
    });


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("ten thousandths", 
        {
            size: 0.22, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t82 = new THREE.Mesh(textGeom, textMaterial );
        t82.position.set(9.4,0.5,1);
        t82.visible=false;
        PIEaddElement(t82);
        PIErender();
    });


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Total = (9 x 10000) + (7 x 1000) + (3 x 100) + (2 x 10) + (5 x 1) + (1 x 1/10) + (4 x 1/100) + (8 x 1/1000) + (6 x 1/10000)", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t83 = new THREE.Mesh(textGeom, textMaterial );
        t83.position.set(-8.8,-1.5,1);
        t83.visible=false;
        PIEaddElement(t83);
        PIErender();
    });


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("= 97325.1486", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        t84 = new THREE.Mesh(textGeom, textMaterial );
        t84.position.set(-7.8,-2.2,1);
        t84.visible=false;
        PIEaddElement(t84);
        PIErender();
    });




var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray1 = [materialSide1 ];
    var loader = new THREE.FontLoader();
  loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Observe every digit place value", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
        t85 = new THREE.Mesh(textGeom, textMaterial );
        t85.position.set(-11.8,5.2,2);
        t85.visible=false;
        PIEaddElement(t85);
        PIErender();
    });




   var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x168e1e} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();


loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Lets finish the quiz : Click quiz   ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
        t88 = new THREE.Mesh(textGeom, textMaterial );
        t88.position.set(-11.8,5.2,2);
        t88.visible=false;
        PIEaddElement(t88);
        PIErender();
    });


}



function resetdata1(){
    t70.visible=false;
    t71.visible=false;
    //t72.visible=false;
    t73.visible=false;
    t74.visible=false;
    t75.visible=false;
    t76.visible=false;
    t77.visible=false;
    t78.visible=false;
    t79.visible=false;
    t80.visible=false;
    t81.visible=false;
    t82.visible=false;
    t83.visible=false;
    t84.visible=false;
    t85.visible=false;
    t86.visible=false;
    t87.visible=false;
    t88.visible=false;
    arrowHelper1.visible=false;
    arrowHelper2.visible=false;
    arrowHelper3.visible=false;
    arrowHelper4.visible=false;
    arrowHelper5.visible=false;
    arrowHelper6.visible=false;
    arrowHelper7.visible=false;
    arrowHelper8.visible=false;
    arrowHelper9.visible=false;
    arrowHelper10.visible=false;
    think1.visible=true;
    think2.visible=true;
    think3.visible=true;
    PIEstopAnimation();
}


var arrowHelper10,arrowHelper9,arrowHelper8,arrowHelper7,arrowHelper6,arrowHelper5,arrowHelper4,arrowHelper3,arrowHelper2,arrowHelper1;




function initialiseControls(){

	      PIEaddInputCommand('Next', next1);
          // PIEaddInputCommand('Learn : Decimal place value', placevalue);
          // //PIEaddDualCommand('Quiz', quiz1);
          // PIEaddInputCommand('Quiz', quiz);

}



function quiz(){
 if (flag1==0) {
        resetdata();
    }
    if (flag1==1) {
        resetdata1();
    }
    else if (flag1==2) {
        resetquiz1();
    resetquiz2();
    resetquiz3();
    resetquiz4();
    resetquiz5();
    resetquiz6();
    PIErender();
    
    passed.visible=false;
    turnpage.visible=false;
    PIErender();
    turning1=0;
    }

     t43.visible=false;

     board.visible=false;
     teacher.visible=false;
     book.visible=true;
     PIErender();


    think1.visible=false;
    think2.visible=false;
    think3.visible=false;
    PIErender();

    //PIEstartAnimation();
      count=0;

    think1.visible=false;
    think2.visible=false;
    think3.visible=false;
     flag1=2;
  

  quiz1();


}

function quiz1(){
    flag1=2;
    PIEstartAnimation();
normal1.visible=true;
qt1.visible=true;
qt2.visible=true;
plane1.visible=true;
plane2.visible=true;
plane3.visible=true;
plane4.visible=true;
qa1.visible=true;
qa2.visible=true;
qa3.visible=true;
qa4.visible=true;
turning1=0;
turn1=0;
turn2=0;

}


function resetquiz1(){
normal1.visible=false;
qt1.visible=false;
qt2.visible=false;
plane1.visible=false;
plane2.visible=false;
plane3.visible=false;
plane4.visible=false;
qa1.visible=false;
qa2.visible=false;
qa3.visible=false;
qa4.visible=false;
correct1.visible=false;
wrong1.visible=false;
tryagain.visible=false;
}


function quiz2(){
    turn=0;
qt3.visible=true;
qt4.visible=true;
qt5.visible=true;
plane5.visible=true;
plane6.visible=true;
plane7.visible=true;
plane8.visible=true;
qb1.visible=true;
qb2.visible=true;
qb3.visible=true;
qb4.visible=true;
// correct2.visible=false;
// wrong2.visible=false;
}



function resetquiz2(){
qt3.visible=false;
qt4.visible=false;
qt5.visible=false;
plane5.visible=false;
plane6.visible=false;
plane7.visible=false;
plane8.visible=false;
qb1.visible=false;
qb2.visible=false;
qb3.visible=false;
qb4.visible=false;
correct2.visible=false;
wrong2.visible=false;
tryagain2.visible=false;
}


function quiz3(){
qt6.visible=true;
qt7.visible=true;
qt8.visible=true;
plane9.visible=true;
plane10.visible=true;
plane11.visible=true;
plane12.visible=true;
qa5.visible=true;
qa6.visible=true;
qa7.visible=true;
qa8.visible=true;
turning1=2;
}



function resetquiz3(){
qt6.visible=false;
qt7.visible=false;
qt8.visible=false;
plane9.visible=false;
plane10.visible=false;
plane11.visible=false;
plane12.visible=false;
qa5.visible=false;
qa6.visible=false;
qa7.visible=false;
qa8.visible=false;
correct1.visible=false;
wrong1.visible=false;
tryagain.visible=false;
}


function quiz4(){
qt9.visible=true;
qt10.visible=true;
qt11.visible=true;
plane13.visible=true;
plane14.visible=true;
plane15.visible=true;
plane16.visible=true;
qb5.visible=true;
qb6.visible=true;
qb7.visible=true;
qb8.visible=true;
}


function resetquiz4(){
qt9.visible=false;
qt10.visible=false;
qt11.visible=false;
plane13.visible=false;
plane14.visible=false;
plane15.visible=false;
plane16.visible=false;
qb5.visible=false;
qb6.visible=false;
qb7.visible=false;
qb8.visible=false;
correct2.visible=false;
wrong2.visible=false;
tryagain2.visible=false;
}


function quiz5(){
qt12.visible=true;
qt13.visible=true;
plane17.visible=true;
plane18.visible=true;
plane19.visible=true;
plane20.visible=true;
qa9.visible=true;
qa10.visible=true;
qa11.visible=true;
qa12.visible=true;
turning1=3;
}

function resetquiz5(){
qt12.visible=false;
qt13.visible=false;
plane17.visible=false;
plane18.visible=false;
plane19.visible=false;
plane20.visible=false;
qa9.visible=false;
qa10.visible=false;
qa11.visible=false;
qa12.visible=false;
correct1.visible=false;
wrong1.visible=false;
tryagain.visible=false;
}

function quiz6(){
qt14.visible=true;
qt15.visible=true;
qt16.visible=true;
qt17.visible=true;
qt18.visible=true;
qt19.visible=true;
qt20.visible=true;
qb9.visible=true;
qb10.visible=true;
qb11.visible=true;
qb12.visible=true;
plane21.visible=true;
plane22.visible=true;
plane23.visible=true;
plane24.visible=true;
}

function resetquiz6(){
qt14.visible=false;
qt15.visible=false;
qt16.visible=false;
qt17.visible=false;
qt18.visible=false;
qt19.visible=false;
qt20.visible=false;
qb9.visible=false;
qb10.visible=false;
qb11.visible=false;
qb12.visible=false;
plane21.visible=false;
plane22.visible=false;
plane23.visible=false;
plane24.visible=false;
wrong2.visible=false;
correct2.visible=false;
tryagain2.visible=false;
}


function quiztest(){

var materialSide5 = new THREE.MeshBasicMaterial( { color: 0xf2042c} );
    var materialArray = [materialSide5 ];
    var loader = new THREE.FontLoader();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("NOTE  :  Click on the correct option ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide5);
        normal1 = new THREE.Mesh(textGeom, textMaterial );
        normal1.position.set(-11,5.5,1);
        normal1.visible=false;
        PIEaddElement(normal1);
        PIErender();
    });


var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("1. Select the fraction of the given Decimal value? ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt1 = new THREE.Mesh(textGeom, textMaterial );
        qt1.position.set(-11.9,4.5,1);
        qt1.visible=false;
        PIEaddElement(qt1);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal Number : 19.25  ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt2 = new THREE.Mesh(textGeom, textMaterial );
        qt2.position.set(-10,3.5,1);
        qt2.visible=false;
        PIEaddElement(qt2);
        PIErender();
    });



      var materialSide10 = new THREE.MeshBasicMaterial( { color: 0xef3232} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Try again...!  ", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide10);
        tryagain = new THREE.Mesh(textGeom, textMaterial );
        tryagain.position.set(-7,-2,1);
        tryagain.visible=false;
        PIEaddElement(tryagain);
        PIErender();
    });


var geometry = new THREE.PlaneGeometry( 1.5, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane1 = new THREE.Mesh( geometry, material );
plane1.position.set(-10.8,2.1,1.1);
PIEaddElement (plane1 );
plane1.visible=false;
PIEsetClick(plane1,q1a1);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)71/2 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa1 = new THREE.Mesh(textGeom, textMaterial );
        qa1.position.set(-11.5,2,1);
        qa1.visible=false;
        PIEaddElement(qa1);
        PIEsetClick(qa1,q1a1);
        PIErender();
    });



plane2 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane2.position.set(-10.8,1.1,1.3);
PIEaddElement (plane2 );
plane2.visible=false;
PIEsetClick(plane2,q1a2);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)77/4 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa2 = new THREE.Mesh(textGeom, textMaterial );
        qa2.position.set(-11.5,1,1);
        qa2.visible=false;
        PIEaddElement(qa2);
        PIEsetClick(qa2,q1a2);
        PIErender();
    });


plane3 = new THREE.Mesh( geometry, material );
plane3.position.set(-10.8,0.1,1.1);
PIEaddElement (plane3 );
plane3.visible=false;
PIEsetClick(plane3,q1a1);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)85/8 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa3 = new THREE.Mesh(textGeom, textMaterial );
        qa3.position.set(-11.5,0,1);
        qa3.visible=false;
        PIEaddElement(qa3);
        PIEsetClick(qa3,q1a1);
        PIErender();
    });



plane4 = new THREE.Mesh( geometry, material );
plane4.position.set(-10.8,-0.9,1.1);
PIEaddElement (plane4 );
plane4.visible=false;
PIEsetClick(plane4,q1a1);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)53/7 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa4 = new THREE.Mesh(textGeom, textMaterial );
        qa4.position.set(-11.5,-1,1);
        qa4.visible=false;
        PIEaddElement(qa4);
        PIEsetClick(qa4,q1a1);
        PIErender();
    });




//...................................................................



var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("2. select the digit in place of tens of ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt3 = new THREE.Mesh(textGeom, textMaterial );
        qt3.position.set(-0.4,4.5,1);
        qt3.visible=false;
        PIEaddElement(qt3);
        PIErender();
    });



       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("the given number ? ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt4 = new THREE.Mesh(textGeom, textMaterial );
        qt4.position.set(-0.4,4,1);
        qt4.visible=false;
        PIEaddElement(qt4);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal Number : 8654.76  ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt5 = new THREE.Mesh(textGeom, textMaterial );
        qt5.position.set(1,3.5,1);
        qt5.visible=false;
        PIEaddElement(qt5);
        PIErender();
    });




var materialSide10 = new THREE.MeshBasicMaterial( { color: 0xef3232} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Try again...!  ", 
        {
            size: 0.4, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide10);
        tryagain2 = new THREE.Mesh(textGeom, textMaterial );
        tryagain2.position.set(4.5,-2,1);
        tryagain2.visible=false;
        PIEaddElement(tryagain2);
        PIErender();
    });


var geometry = new THREE.PlaneGeometry( 1.5, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane5 = new THREE.Mesh( geometry, material );
plane5.position.set(-0.4,2.1,1.1);
PIEaddElement (plane5 );
plane5.visible=false;
PIEsetClick(plane5,q1b2);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)5 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb1 = new THREE.Mesh(textGeom, textMaterial );
        qb1.position.set(-0.4,2,1);
        qb1.visible=false;
        PIEaddElement(qb1);
        PIEsetClick(qb1,q1b2);
        PIErender();
    });



plane6 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane6.position.set(-0.4,1.1,1.3);
PIEaddElement (plane6 );
plane6.visible=false;
PIEsetClick(plane6,q1b1);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)8 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb2 = new THREE.Mesh(textGeom, textMaterial );
        qb2.position.set(-0.4,1,1);
        qb2.visible=false;
        PIEaddElement(qb2);
        PIEsetClick(qb2,q1b1);
        PIErender();
    });


plane7 = new THREE.Mesh( geometry, material );
plane7.position.set(-0.4,0.1,1.1);
PIEaddElement (plane7 );
plane7.visible=false;
PIEsetClick(plane7,q1b1);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)6 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb3 = new THREE.Mesh(textGeom, textMaterial );
        qb3.position.set(-0.4,0,1);
        qb3.visible=false;
        PIEaddElement(qb3);
        PIEsetClick(qb3,q1b1);
        PIErender();
    });



plane8 = new THREE.Mesh( geometry, material );
plane8.position.set(-0.4,-0.9,1.1);
PIEaddElement (plane8 );
plane8.visible=false;
PIEsetClick(plane8,q1b1);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)7 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb4 = new THREE.Mesh(textGeom, textMaterial );
        qb4.position.set(-0.4,-1,1);
        qb4.visible=false;
        PIEaddElement(qb4);
        PIEsetClick(qb4,q1b1);
        PIErender();
    });


//..........................................................................................
//..........................................................................................



var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("3. Which value does 1 represents in the given  ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt6 = new THREE.Mesh(textGeom, textMaterial );
        qt6.position.set(-11.9,4.5,1);
        qt6.visible=false;
        PIEaddElement(qt6);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("decimal number ? ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt7 = new THREE.Mesh(textGeom, textMaterial );
        qt7.position.set(-11.6,4,1);
        qt7.visible=false;
        PIEaddElement(qt7);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal Number : 3456.21  ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt8 = new THREE.Mesh(textGeom, textMaterial );
        qt8.position.set(-10,3.5,1);
        qt8.visible=false;
        PIEaddElement(qt8);
        PIErender();
    });





var geometry = new THREE.PlaneGeometry( 3.6, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane9 = new THREE.Mesh( geometry, material );
plane9.position.set(-9.6,2.1,1.1);
PIEaddElement (plane9 );
plane9.visible=false;
PIEsetClick(plane9,q1a1);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)Hundreds (x 100) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa5 = new THREE.Mesh(textGeom, textMaterial );
        qa5.position.set(-11.5,2,1);
        qa5.visible=false;
        PIEaddElement(qa5);
        PIEsetClick(qa5,q1a1);
        PIErender();
    });


var geometry = new THREE.PlaneGeometry( 2.3, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane10 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane10.position.set(-10.2,1.1,1.3);
PIEaddElement (plane10 );
plane10.visible=false;
PIEsetClick(plane10,q1a1);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)ones (x 1) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa6 = new THREE.Mesh(textGeom, textMaterial );
        qa6.position.set(-11.5,1,1);
        qa6.visible=false;
        PIEaddElement(qa6);
        PIEsetClick(qa6,q1a1);
        PIErender();
    });


var geometry = new THREE.PlaneGeometry( 3.6, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane11 = new THREE.Mesh( geometry, material );
plane11.position.set(-9.6,0.1,1.1);
PIEaddElement (plane11 );
plane11.visible=false;
PIEsetClick(plane11,q1a1);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)Tenths (x 1/10) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa7 = new THREE.Mesh(textGeom, textMaterial );
        qa7.position.set(-11.5,0,1);
        qa7.visible=false;
        PIEaddElement(qa7);
        PIEsetClick(qa7,q1a1);
        PIErender();
    });


var geometry = new THREE.PlaneGeometry( 4.2, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane12 = new THREE.Mesh( geometry, material );
plane12.position.set(-9.3,-0.9,1.1);
PIEaddElement (plane12 );
plane12.visible=false;
PIEsetClick(plane12,q1a2);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)Hundredths (x 1/100) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa8 = new THREE.Mesh(textGeom, textMaterial );
        qa8.position.set(-11.5,-1,1);
        qa8.visible=false;
        PIEaddElement(qa8);
        PIEsetClick(qa8,q1a2);
        PIErender();
    });



//.............................................................................................
//.............................................................................................
//.............................................................................................
//.............................................................................................
var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("4.find out the mixed fraction of the  ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt9 = new THREE.Mesh(textGeom, textMaterial );
        qt9.position.set(-0.4,4.5,1);
        qt9.visible=false;
        PIEaddElement(qt9);
        PIErender();
    });



       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("given number ? ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt10 = new THREE.Mesh(textGeom, textMaterial );
        qt10.position.set(-0.4,4,1);
        qt10.visible=false;
        PIEaddElement(qt10);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Decimal Number : 4.35  ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt11 = new THREE.Mesh(textGeom, textMaterial );
        qt11.position.set(1,3.5,1);
        qt11.visible=false;
        PIEaddElement(qt11);
        PIErender();
    });


      var geometry = new THREE.PlaneGeometry( 1.5, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane13 = new THREE.Mesh( geometry, material );
plane13.position.set(0.5,2.1,1.1);
PIEaddElement (plane13);
plane13.visible=false;
PIEsetClick(plane13,q1b1);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)2 (7/25)", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb5 = new THREE.Mesh(textGeom, textMaterial );
        qb5.position.set(-0.4,2,1);
        qb5.visible=false;
        PIEaddElement(qb5);
        PIEsetClick(qb5,q1b1);
        PIErender();
    });



plane14 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane14.position.set(0.5,1.1,1.3);
PIEaddElement (plane14 );
plane14.visible=false;
PIEsetClick(plane14,q1b1);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)4 (5/20) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb6 = new THREE.Mesh(textGeom, textMaterial );
        qb6.position.set(-0.4,1,1);
        qb6.visible=false;
        PIEaddElement(qb6);
        PIEsetClick(qb6,q1b1);
        PIErender();
    });


plane15 = new THREE.Mesh( geometry, material );
plane15.position.set(0.5,0.1,1.1);
PIEaddElement (plane15 );
plane15.visible=false;
PIEsetClick(plane15,q1b2);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)4 (7/20) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb7 = new THREE.Mesh(textGeom, textMaterial );
        qb7.position.set(-0.4,0,1);
        qb7.visible=false;
        PIEaddElement(qb7);
        PIEsetClick(qb7,q1b2);
        PIErender();
    });



plane16 = new THREE.Mesh( geometry, material );
plane16.position.set(0.5,-0.9,1.1);
PIEaddElement (plane16 );
plane16.visible=false;
PIEsetClick(plane16,q1b1);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)2 (7/20) ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb8 = new THREE.Mesh(textGeom, textMaterial );
        qb8.position.set(-0.4,-1,1);
        qb8.visible=false;
        PIEaddElement(qb8);
        PIEsetClick(qb8,q1b1);
        PIErender();
    });




 //..............................................................
 //..........................................................
 //.............................................


 var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("5. what will be the normal fraction of the  ", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt12 = new THREE.Mesh(textGeom, textMaterial );
        qt12.position.set(-11.9,4.5,1);
        qt12.visible=false;
        PIEaddElement(qt12);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" mixed fraction  8 (11/9) .", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt13 = new THREE.Mesh(textGeom, textMaterial );
        qt13.position.set(-11.5,3.5,1);
        qt13.visible=false;
        PIEaddElement(qt13);
        PIErender();
    });





var geometry = new THREE.PlaneGeometry( 1.5, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane17 = new THREE.Mesh( geometry, material );
plane17.position.set(-10.8,2.1,1.1);
PIEaddElement (plane17 );
plane17.visible=false;
PIEsetClick(plane17,q1a1);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)89/9", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa9 = new THREE.Mesh(textGeom, textMaterial );
        qa9.position.set(-11.5,2,1);
        qa9.visible=false;
        PIEaddElement(qa9);
        PIEsetClick(qa9,q1a1);
        PIErender();
    });



plane18 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane18.position.set(-10.8,1.1,1.3);
PIEaddElement (plane18 );
plane18.visible=false;
PIEsetClick(plane18,q1a2);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)83/9 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa10 = new THREE.Mesh(textGeom, textMaterial );
        qa10.position.set(-11.5,1,1);
        qa10.visible=false;
        PIEaddElement(qa10);
        PIEsetClick(qa10,q1a2);
        PIErender();
    });


plane19 = new THREE.Mesh( geometry, material );
plane19.position.set(-10.8,0.1,1.1);
PIEaddElement (plane19 );
plane19.visible=false;
PIEsetClick(plane19,q1a1);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)83/3 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa11 = new THREE.Mesh(textGeom, textMaterial );
        qa11.position.set(-11.5,0,1);
        qa11.visible=false;
        PIEaddElement(qa11);
        PIEsetClick(qa11,q1a1);
        PIErender();
    });



plane20 = new THREE.Mesh( geometry, material );
plane20.position.set(-10.8,-0.9,1.1);
PIEaddElement (plane20 );
plane20.visible=false;
PIEsetClick(plane20,q1a1);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)89/3 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qa12 = new THREE.Mesh(textGeom, textMaterial );
        qa12.position.set(-11.5,-1,1);
        qa12.visible=false;
        PIEaddElement(qa12);
        PIEsetClick(qa12,q1a1);
        PIErender();
    });



//............................................................................
//...........................................................................................
//...........................................................................................................
var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
    var materialArray = [materialSide ];
    var loader = new THREE.FontLoader();
      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("6.What will be the decimal number formed by", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt14 = new THREE.Mesh(textGeom, textMaterial );
        qt14.position.set(-0.6,4.5,1);
        qt14.visible=false;
        PIEaddElement(qt14);
        PIErender();
    });



       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("the following quiries ?", 
        {
            size: 0.31, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt15 = new THREE.Mesh(textGeom, textMaterial );
        qt15.position.set(-0.6,4,1);
        qt15.visible=false;
        PIEaddElement(qt15);
        PIErender();
    });



      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" 8 in ones (x 1) decimal position ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt16 = new THREE.Mesh(textGeom, textMaterial );
        qt16.position.set(-0.7,3,1);
        qt16.visible=false;
        PIEaddElement(qt16);
        PIErender();
    });


       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" 6 in Tenths (x 1/10) decimal position  ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt17 = new THREE.Mesh(textGeom, textMaterial );
        qt17.position.set(-0.7,2.5,1);
        qt17.visible=false;
        PIEaddElement(qt17);
        PIErender();
    });


        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("3 in thousands(x 1000) decimal position", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt18 = new THREE.Mesh(textGeom, textMaterial );
        qt18.position.set(-0.6,2,1);
        qt18.visible=false;
        PIEaddElement(qt18);
        PIErender();
    });




        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("1 in hundredths(x 1/100) decimal position", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt19 = new THREE.Mesh(textGeom, textMaterial );
        qt19.position.set(-0.6,1.5,1);
        qt19.visible=false;
        PIEaddElement(qt19);
        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("9 in hundreds(x 100) decimal position", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qt20 = new THREE.Mesh(textGeom, textMaterial );
        qt20.position.set(-0.6,1,1);
        qt20.visible=false;
        PIEaddElement(qt20);
        PIErender();
    });






var geometry = new THREE.PlaneGeometry( 1.8, 0.5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true,opacity:0.01, side: THREE.DoubleSide} );
plane21 = new THREE.Mesh( geometry, material );
plane21.position.set(0.6,0.1,1.1);
PIEaddElement (plane21 );
plane21.visible=false;
PIEsetClick(plane21,q1b1);
PIErender();

      loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" A)318.69 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb9 = new THREE.Mesh(textGeom, textMaterial );
        qb9.position.set(-0.4,0,1);
        qb9.visible=false;
        PIEaddElement(qb9);
        PIEsetClick(qb9,q1b1);
        PIErender();
    });



plane22 = new THREE.Mesh( geometry, material );
//plane.position.set(-10.8,2.1,1.1);
plane22.position.set(0.6,-0.9,1.3);
PIEaddElement (plane22 );
plane22.visible=false;
PIEsetClick(plane22,q1b1);
PIErender();


//correct
       loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" B)813.16 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb10 = new THREE.Mesh(textGeom, textMaterial );
        qb10.position.set(-0.4,-1,1);
        qb10.visible=false;
        PIEaddElement(qb10);
        PIEsetClick(qb10,q1b1);
        PIErender();
    });


plane23 = new THREE.Mesh( geometry, material );
plane23.position.set(0.6,-1.9,1.1);
PIEaddElement (plane23 );
plane23.visible=false;
PIEsetClick(plane23,q1b1);
PIErender();

        loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" C)983.61 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb11 = new THREE.Mesh(textGeom, textMaterial );
        qb11.position.set(-0.4,-2,1);
        qb11.visible=false;
        PIEaddElement(qb11);
        PIEsetClick(qb11,q1b1);
        PIErender();
    });



plane24 = new THREE.Mesh( geometry, material );
plane24.position.set(0.6,-2.9,1.1);
PIEaddElement (plane24 );
plane24.visible=false;
PIEsetClick(plane24,q1b2);
PIErender();


         loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" D)398.61 ", 
        {
            size: 0.3, height: 0,
            font: font, weight: "normal", style: "normal"
        });  
    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
        qb12 = new THREE.Mesh(textGeom, textMaterial );
        qb12.position.set(-0.4,-3,1);
        qb12.visible=false;
        PIEaddElement(qb12);
        PIEsetClick(qb12,q1b2);
        PIErender();
    });

        

}




var turn1,turn2;
function q1a1(){
    correct1.visible=false;
    wrong1.visible=true;
    tryagain.visible=true;
    turn1=0;
    passed.visible=false;
    PIErender();
    turnpage1();
    PIEstartAnimation();
    PIErender();
}

function q1a2(){
    wrong1.visible=false;
    correct1.visible=true;
    tryagain.visible=false;

    

    if (turning1==0) {
        turn1=1;
         quiz2();
    }
    else if (turning1==1) {
        turn1=3;
        quiz4();
    }

    else if (turning1==2) {
        turn1=5;
        quiz6();
    }

    turnpage1();


}


function q1b1(){
    correct2.visible=false;
    wrong2.visible=true;
    tryagain2.visible=true;
    turn2=0;
    passed.visible=false;
    turnpage1();
    PIErender();
    PIEstartAnimation();
    PIErender();
}

function q1b2(){
    wrong2.visible=false;
    correct2.visible=true;
    tryagain2.visible=false;
    turn2=1;
     if (turning1==0) {
        turn2=1;
    }
    else if (turning1==1) {
        turn2=4;
        
    }
    else if (turning1==2) {
        turn2=6;
    }
    turnpage1();
    PIErender();
}

var turning1=0;
function turnpage1(){
if (turn1==1 && turn2==1) {
   turning1=0;
turnpage.visible=true;
}
else if (turn1==3 && turn2==4) {
    turning1=1;
    turnpage.visible=true;
}
else if (turn1==5 && turn2==6) {
    turning1=2;
     passed.visible=true;
    //turnpage.visible=true;
}
else {
    turnpage.visible=false;
    
}
}

function turning(){
   if (turning1==0) {
    resetquiz1();
    resetquiz2();
    quiz3();
    PIErender();
    turnpage.visible=false;
    PIErender();
    turn1=0;
    turn2=0;
    console.log("first loop");
    turning1=1;
    }
    else if (turning1==1) {
        console.log("second loop");
        resetquiz3();
        resetquiz4();
        PIErender();
        turnpage.visible=false;
        PIErender();
        turn1=0;
        turn2=0;
        quiz5();
        PIErender();
        turning1=2;
    }

     else if (turning1==2) {
        console.log("second loop");
        resetquiz5();
        resetquiz6();
        PIErender();
        turnpage.visible=false;
        PIErender();
        turn1=0;
        turn2=0;
        PIErender();
        turning1=3;
    }
    PIEstartAnimation();
    PIErender();
 
}





function initialiseOtherVariables(){
    // angle=PIEgetInputSlider("Inclined angle");
    // v1x=5.5;
    // v2x=5.5;
    // v2y=-3.5;
    // v3x=0.5;
    // v3y=-3.5;
    // v1y=(((5)*Math.tan(angle*((Math.PI)/180)))-3.5);
    
}


function resetExperiment(){
   

 think1.visible=true;
    think2.visible=true;
    think3.visible=true;

    if (flag1==1) {
        resetdata1();
    }
    else if (flag1==2) {
        teacher.visible=true;
    board.visible=true;
    PIErender();

    resetquiz1();
    resetquiz2();
    resetquiz3();
    resetquiz4();
    resetquiz5();
    resetquiz6();

    book.visible=false;
    passed.visible=false;
    turnpage.visible=false;
    PIErender();

    
    PIEstopAnimation();
    PIErender();
    }


//resetdata();

  
    count=0;
    min = 1.000;
    max = 99.99;
    highlightedNumber = Math.random() * (max - min) + min;
    highlightedNumber=precisionRound(highlightedNumber, 3);
    integerd=Math.floor(highlightedNumber);
    console.log(integerd);
    integerp=highlightedNumber-Math.floor(highlightedNumber);
    integerp=precisionRound(integerp,3);
    console.log(integerp);
    lengthd=integerd.toString();
    console.log(lengthd.length);
    lengthp=integerp.toString();
    console.log((lengthp.length)-2);
    lengthp1=((lengthp.length)-2);

    if (lengthp1==2) {
        mulfactor=100;
    }
    else if (lengthp1==3) {
        mulfactor=1000;
    }
    thousands1=Math.floor(integerd/1000);
    console.log(thousands1);
    hundreds1=(Math.floor(integerd/100)-(thousands1*10));
    console.log(hundreds1);
    tens1=((Math.floor(integerd/10))-(thousands1*100)-(hundreds1*10));
    console.log(tens1);
    ones1=(integerd-(thousands1*1000)-(hundreds1*100)-(tens1*10));
    console.log(ones1);

    onetenths1=(Math.floor(integerp*10));
    console.log(onetenths1);
    onehundreds1=((Math.floor(integerp*100))-(onetenths1*10));
    console.log(onehundreds1);
    onethousands1=(integerp*1000)-(onetenths1*100)-(onehundreds1*10);
    console.log(onethousands1);

    divfactor=gcd(mulfactor*integerp,mulfactor);
    console.log("ddddddddddddd");
    console.log(divfactor);


    flag1=0;
if (flag==1) {
    resetdata();
    PIErender();
}

loaddata();


    PIErender();
    PIErender();

}

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Decimals as fractions</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment is about how to represent a decimal number as a fraction.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. </p>";
    helpContent = helpContent + "<h3>Working stage</h3>";
    // helpContent = helpContent + "<ul>";
    // helpContent = helpContent + "<li>coefficient of friction = 0.3";
    // helpContent = helpContent + "<li>mass of cylinder = 2kg";
    // helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Everything in this animation is like a class demo.</p>";
    helpContent = helpContent + "<p>At starting student has to start the animation.</p>";
    helpContent = helpContent + "<p>It will show a demo about how to convert a decimal number into a fraction.</p>";
    helpContent = helpContent + "<p>You can watch the demo any no.of times you want, by clicking the next button. Every time it creates a random decimal number.</p>";
    helpContent = helpContent + "<p>After that you can click Learn : Decimal place value which includes a demo about decimal place value of every digit in a decimal number.</p>";
    helpContent = helpContent + "<p>After that student should complete the quiz which includes six different questions ,by clicking quiz button. </p>";
    helpContent = helpContent + "<h3>ALL THE BEST.</h3>";
    // helpContent = helpContent + "<p>umgcos(angle)=(m/2)*(2/3)*g* sin(angle)</p>";
    // helpContent = helpContent + "<p>tan(angle)=3u</p>";
    // helpContent = helpContent + "<p>If you change the angle such that 0 < angle < taninverse(3u) then cylinder begins to roll. There you can understand that the cylinder rolls even for a slight angle.</p>";
    // helpContent = helpContent + "<p>If you change the angle such that angle>taninverse(3u). Then cylinder intially slides(slips) afterwords performs uniform rolling.</p>";
    // helpContent = helpContent + "<h3>Observation stage</h3>";
    // helpContent = helpContent + "<p>On observing static friction, sliding friction, rolling friction forces for different angles it shows that static friction force is always greater than sliding friction force and sliding friction force is always greater than rolling friction force</p>";
    // helpContent = helpContent + "<p></p>";
    // helpContent = helpContent + "<p></p>";
    // helpContent = helpContent + "<p></p>";
    // helpContent = helpContent + "<h4>Conclusion</h4>";
    // helpContent = helpContent + "<p>Static friction force > sliding friction force > rolling friction force</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Decimals as fractions</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment is about how to represent a decimal number as a fraction.</p>";
    infoContent = infoContent + "<h3>Decimals as fractions : </h3>";
    infoContent = infoContent + "<p>All decimal numbers can be expressed as a fraction.Fractions and decimals are very similar. In fact, decimal numbers are more correctly known as decimal fractions and fractions with numerators and denominators are, to give them a longer name, common fractions.A clear demo is given in animation how to convert a decimal number into a fraction.First it shows how to find a mixed fraction from the given decimal number there by finding the normal fraction from that mixed fraction.</p>";
    infoContent = infoContent + "<h3>Decimal place value : </h3>";
    infoContent = infoContent + "<p>The decimal number is divided like right side of decimal point, left side of decimal point.</p>";
    infoContent = infoContent + "<p>The right side part is called 'decimal part' and the left side part is called 'integer part'. </p>";
    infoContent = infoContent + "<p>The leftmost digit of decimal point represents the value ones( x 1 ), and the rightmost digit of decimal point represents the value tenths( x 1/10).</p>";
    infoContent = infoContent + "<p>The second leftmost digit of decimal point represents the value tens( x 10 ), and the second leftmost digit of decimal point represents the value hundredths( x 1/100 )</p>";
    infoContent = infoContent + "<p>And the remaining part of decimal place value is explained in animation clearly.</p>";
    infoContent = infoContent + "<h3>ALL THE BEST.</h3>";
   //  infoContent = infoContent + "<p>Rolling friction is friction that acts on objects when they are rolling over a surface. Rolling friction is much weaker than sliding friction or static friction. This explains why most forms of ground transportation use wheels, including bicycles, cars, 4-wheelers, roller skates, scooters, and skateboards.</p>";
   // // infoContent = infoContent + "<ul><li> </li></ul>";
   //  infoContent = infoContent + "<h3>Static friction is greater than sliding friction</h3>";
   //  infoContent = infoContent + "<p>The friction is due to interlocking of irregularities in two surfaces. when the object starts sliding the contact points on its surface, do not get enough time to lock into the contact points on the floor. So the sliding friction is slightly less than static friction</p>";
   //  infoContent = infoContent + "<h3>Sliding friction is greater than rolling friction</h3>";
   //  infoContent = infoContent + "<p>Rolling friction is the force resisting the motion when a body (such as a ball, tire, or wheel) rolls on a surface. Sliding friction is the force resisting the motion when a body slides on a surface. The force of friction depends on the area of contact between the two surfaces. As the area of contact is less in the case of rolling than in the case of sliding, rolling friction is less than the sliding frictio</p>";
   //  infoContent = infoContent + "<h3> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Static friction > sliding friction > rolling friction</h3>";
     PIEupdateInfo(infoContent);
}

















function PIEsetDragStart(a, b) {
    a.dragStart = b
}
function PIEsetDrag(a, b) {
    a.drag = b
}
function PIEsetDragEnd(a, b) {
    a.dragEnd = b
}

var PIEdragElements = [];
function PIEdragElement(a) {
    PIEdragElements.push(a)
}
function PIEremoveDragElement(b) {
    var a;
    var c;
    c = false;
    for (a = 0; (c == false) && (a < PIEdragElements.length); a++) {
        if (PIEdragElements[a] == b) {
            c = true
        }
    }
    if (c == true) {
        while (a <= PIEdragElements.length) {
            PIEdragElements[a - 1] = PIEdragElements[a];
            a++
        }
        PIEdragElements.pop()
    }
}


function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1; (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}