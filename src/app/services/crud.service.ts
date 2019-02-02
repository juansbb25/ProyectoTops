import { Injectable } from '@angular/core';
// Importamos angular firestore y angular collection
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()



export class CrudService {
  // Creamos un alias para el AngularFirestore, en este caso se llamará AFS
  constructor(private afs: AngularFirestore) {
    // Esta impresion es opcional, la agrego para confirmar que el servicio funcione correctamente
    console.log('Service CRUD On');
  }
  // C.R.U.D en esta parte es donde vamos a crear cada una de las operaciones basicas
  // Crear, Leer, Actualizar y Eliminar
  // Crea un nuevo Top
  public createTop(data: {
    pregunta: string,
    categoria: string,
    etiquetas: {},
    miembros: {}
  }) {
    return this.afs.collection('Tops').add(data);
  }
  
  // Obtiene un Top
  public getTop(documentId: string) {
    return this.afs.collection('Tops').doc(documentId).snapshotChanges();
  }
  // Obtiene todos Top
  public getTops() {
    return this.afs.collection('Tops').snapshotChanges();
  }

  public updateTop(documentId: string, data: {
    nombre: string,
    descripcion: string
  }) {
    return this.afs.collection('Tops').doc(documentId).set(data);
  }

  // Borra Top
  public deleteTop(documentId: string) {
    return this.afs.collection('Tops').doc(documentId).delete();
  }
}
