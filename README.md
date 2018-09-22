#  Firebase con React Native
Firebase, Inc.  
[![Firebase logo1.png](https://upload.wikimedia.org/wikipedia/commons/4/42/Firebase_logo1.png)](https://commons.wikimedia.org/wiki/File:Firebase_logo1.png)  
Firebase es una plataforma de aplicaciones móviles y web con herramientas e infraestructura diseñadas para ayudar a los desarrolladores a crear aplicaciones de alta calidad 
Sitio:  [https://firebase.google.com/](https://firebase.google.com/)



# Plataformas
![Resultado de imagen para firebase platform](https://qph.fs.quoracdn.net/main-qimg-87aea07fffdfe2af33e4064a7223ab76)



## **¿Qué servicios nos ofrece?**

Veamos, uno por uno, los servicios más destacados que nos ofrece Firebase para trabajar de una manera más sencilla en nuestra aplicación.
![Imagen relacionada](http://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2017/02/04190313/Firebase.png)

### **Base de datos Realtime**

Con la base en tiempo real de Firebase podrás guardar todos los datos que requiera tu aplicación. Esta base de datos funciona en tiempo real por lo que los cambios se mostrarán al instante. Estos se almacenan en formato JSON y se pueden agregar reglas para permitir requests con token o solo desde una URL por ejemplo.

### **Autenticación**

Es un servicio que nos simplifica el inicio de sesión y la gestión de la misma en nuestra aplicación. Si la usamos en aplicaciones web o android studio es extremadamente fácil de configurar, con un simple método ya podremos guardar un usuario con su contraseña y correo.

  

### **Almacenamiento**

Este servicio es muy bueno para aplicaciones que requieran guardar archivos del usuario. También nos sirve si queremos subir estáticos ya que existe un botón desde la interfaz o podemos programar algo. En la aplicación que estoy desarrollando actualmente me sirve para subir fotos de restaurantes ya acceder a ellas en cualquier momento.

### **Hosting**
Con una colección de estáticos podemos subir una aplicación y esta automáticamente contará con SSL y HTTP2. Si tenemos una app con Angular o Firebase podemos hacer un build desde nuestros ordenadores y subir estos archivos generados y nos funcionarán sin problemas. Si necesitamos un Backend tendríamos que subirlo a otro lugar o hacer uso de las Cloud Functions.

### **Cloud Functions(BETA)**

Cloud Functions es un producto bastante reciente de Firebase que tiene como objetivo la transformación de nuestro código del backend en pequeñas piezas del mismo(funciones). Estas funciones son creadas en NodeJS y se suben asíncronamente desde nuestra aplicación. Al crearse generan una URL a la que podemos llamar desde AJAX para que se ejecute el código pertinente. Firebase nos provee de unos triggers para comunicarnos con ciertas funciones de sus productos.

  

### **Laboratorio de tests para Android**

Esta sección es de mis favoritas, ya que, como todo desarrollador android al implementar cambios en mi app debo probarlos mil veces para cubrir cualquier error posible, lo cual en muchos casos puede llegar a agobiar. Este servicio nos ofrece la posibilidad de probar los tests de nuestra aplicación en los entornos que configuremos(Dispositivo, versión del OS…), por lo que nos hace una gran parte del trabajo.

  
### **Informes sobre fallos**

Con esta utilidad podemos detectar los errores que aparezcan en nuestras aplicaciones de iOS y Android así como poder erradicarlos a tiempo. Esta herramienta próximamente dará paso a Crashlytics de Fabric, que se integrará como una herramienta más. A día de hoy podemos usar ambos pero mi recomendación es que uses Crashlytics pues es la herramienta que se instaurará en el futuro.

  
### **Monitoreo de rendimiento**

Esta herramienta te ayudará a medir el rendimiento de tu aplicación y el tiempo que los usuarios pasan durante los diferentes procesos de la misma con el fin de que puedas detectar problemas en el tiempo de carga y prevenirlos antes de que causen cualquier otro tipo de problema o que los usuarios eliminen tu aplicación.

  

### **Notificaciones**

Este servicio nos permitirá gestionar el envío de notificaciones a nuestros usuarios con la diferencia de que estas podrán ser programadas acorde a diferentes parámetros.

  

### **Configuración remota**

Este añadido nos permitirá básicamente modificar el comportamiento y la apariencia de nuestra aplicación sin que nuestros usuarios tengan que tocar nada.

  

### **Enlaces dinámicos**

Con los enlaces dinámicos podremos asegurarnos que a pesar de las redirecciones que supone el proceso de instalar una aplicación desde un anuncio, lleguemos a la vista deseada, ganando así una experiencia que el usuario agradecerá.

  

### **Admob**

Mediante este servicio podremos colocar publicidad en distintos lados de nuestra aplicación. Muchas aplicaciones gratuitas como pueden ser algunos juegos llevan implementado este sistema de publicidad o similares.


# Conexion a Firebase
## **Crear un proyecto en firebase** 
Para empezar entraremos en el panel de control de Firebase, al que podemos acceder con nuestra cuenta de Google en https://console.firebase.google.com/. Una vez dentro podemos crear nuestro nuevo proyecto pulsando en “Añadir proyecto”.

![Crear nuevo proyecto en firebase](http://www.programadorandroid.com/wp-content/uploads/2017/08/crear-nuevo-proyecto-firebase.png)

Aparecerá un sencillo formulario donde tendremos que añadir el nombre del proyecto y el país. El país nos lo piden para saber qué moneda utilizar (por ejemplo podemos generar ingresos con AdMob y en ese caso se mostrará esta moneda en los informes de ingresos). Indicamos los datos y creamos el proyecto.

![Nombre y país del proyecto Firebase](http://www.programadorandroid.com/wp-content/uploads/2017/08/nombre-nuevo-proyecto.png)

Y ya está, tras esperar unos segundos veremos el panel de administración de nuestro nuevo proyecto que se ha creado y está listo para usar.

![Panel del nuevo proyecto de Firebase](http://www.programadorandroid.com/wp-content/uploads/2017/08/panel-de-proyecto.png)

![](https://lh3.googleusercontent.com/A4fueT5YJbtRg4WH7VSiYdRnzk6cx2oD4v8XLd5Amy45CpjTKZLsPvhUe5on-UHkYwFAoGRMcyrfXd0Dyqvr5IcENi4x7W0ri3ke3G43zHRyGEKk7Wd21Jha-VDSkyqrspGyulvQhAaDQKJY8x4d4qAUY5OFYM6CGDgm_tJEOyb_IcbNFOlU_ZTLhjau8fAMT5-BElmvKEa78eQRV1KPptmy_EyEfYkgfdByhiOuBtGbtfDhVwEl1iKBARKIiGsEF7_jw53Vgwn0iiver1fMu9XdrR0OgqmxbNOKPfvaKhlKh-J1yzfm3AGRRYkye9hnnbcH7gNb05m4OpGcm8B7NZsUTW_A8G_21sfDxJYUGBwSeqbRj8LDLDUASOxdYqBSB_oslJ-VgTTIT7j7whPa8bqp86VoiPI-ONIzCrenTxqEtjI0tagPuQ-KrbMeUbUYBr9kfY8-ldc3al4gFdEksrYv5oOXSeAm5GOVL8nwf7uEur-K91U0t71sWGACEB7QHbZrU5OaSsubUVB5WDkRrLIj9s38GJk5KQT9hvIdiolgJyHK4TZjqmQRQBOj3dWxkXy8_zGye7XDehjSVJlbW82xpakTo8T2s1WdQE5fKZIj7Ap5kT5dwBjow2SV7dQ=w1363-h695-no)

## **En mi proyecto ToDo App**
```html

 import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';

import Navigate from './Components/Navigate';

import Dialog from './Components/DialogComponent';

import { Header } from "react-native-elements";

import * as firebase from 'firebase';

///Firebase Base de Datos

var firebaseconfig = {

apiKey: "AIzaSyCfD6Y9NJfyoD3QKk5SAFc1m0dHgEVa-60",

authDomain: "todolist-bf44d.firebaseapp.com",

databaseURL: "https://todolist-bf44d.firebaseio.com",

projectId: "todolist-bf44d",

storageBucket: "todolist-bf44d.appspot.com",

messagingSenderId: "794491965807"

};

firebase.initializeApp(firebaseconfig);

let db=firebase.database().ref('/todoItems');

export default class Checked extends React.Component {

constructor(props) {

super(props);

this.state = {

//todos: [{id:(1).toString(),todo:'Sacar la basura',checked:false}],

todos:[],

showdialog: false,

//cont : 2

};

this.showdialogs = this.showdialogs.bind(this);

}

componentDidMount(){

this.cargarTodoItems(firebase.database().ref('/todoItems'));

}

cargarTodoItems(tasksRef) {

tasksRef.on('value', (dataSnapshot) => {

var tasks = [];

dataSnapshot.forEach((child) => {

tasks.push(

{

id:child.key,

todo: child.val().todo,

checked: child.val().checked,

});

});

this.setState({todos:tasks});

});

}

showdialogs(){

if(this.state.showdialog){

this.setState({showdialog : false})

}else{

this.setState({showdialog : true})

}

}

toggleCheck = id => {

let newList = this.state.todos;

let index = newList.findIndex(x => x.id == id);

if (newList[index].checked) {

newList[index].checked = false;

db.child(id).update({checked:false})

} else {

newList[index].checked = true;

db.child(id).update({checked:true});

}

this.setState({ todos: newList });

};

deleteTask = id => {

let newList = this.state.todos.filter(x => x.id != id);

firebase.database().ref('/todoItems').child(id).remove();

this.setState({ todos: newList });

};

eliminarTarea(tarea){

firebase.database().ref('/todoItems').child(tarea['.key']).remove();

};

sendInput = inputText => {

this.setState({showdialog : false})

let newCont = this.state.cont + 1;

var key=firebase.database().ref('/todoItems').push().key;

let newItem = {

//id: newCont.toString(),

id:key,

todo: inputText,

checked: false

};

//firebase.database().ref('/todoItems').push(newItem);

firebase.database().ref('/todoItems').child(key).set(newItem);

let newList = this.state.todos;

newList.push(newItem);

this.setState({ todos: newList, cont: newCont });

};

render() {

return (

<View style={{ flex: 1}}>

<Header

centerComponent={{

text: "ToDo ANDY",

style: { color: "#fff", fontSize: 22 }

}}

backgroundColor="#93b8d8"

/>

<Navigate

screenProps={{

todos: this.state.todos,

toggleCheck: this.toggleCheck,

deleteTask: this.deleteTask,

// eliminarTarea: this.eliminarTarea,

}}/>

<ActionButton

buttonColor="#1fa382"

offsetY = {65}

onPress={() => {

this.setState({

showdialog : true

})}}

/>

{this.state.showdialog && <Dialog isVisible = {this.showdialogs} in = {this.sendInput}/>}

</View>

);

}

}

const styles = StyleSheet.create({

actionButtonIcon: {

fontSize: 20,

height: 22,

color: 'white',

},

});
  ```


## **Referencias**
https://console.firebase.google.com/?hl=es-419

https://rnfirebase.io/

https://docs.aws.amazon.com/es_es/pinpoint/latest/developerguide/mobile-push-android-cloud-messaging-project.html

https://arpentechnologies.com/es/blog/aplicaciones-movil/que-es-firebase-y-que-nos-aporta/

