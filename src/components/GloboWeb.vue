<template>
  <div class="AppGlobo">
    <header class="encabezado">
      <div class="logo">
        <img :src="LogoWeb" alt="Logo" />
      </div>
      <div class="Usuario_Recibido">
        <input
          type="text"
          placeholder="Ingresa tu usuario ..."
          v-model="usuarioIngresado"
        />
      </div>
    </header>
    <div class="contenedor">
      <section id="informacion">
        <div class="info-contenedor">
          <div class="Jane-Doe">
            <img :src="FotoPerfil" alt="FotoPerfil" class="imagen-perfil" />
          </div>
        </div>
        <div class="info-Jane">
          <p class="nombre"><strong>Jane Doe</strong></p>
          <p><strong>Email</strong>: jane_doe@email.com</p>
          <p><strong>Fecha de nacimiento</strong>: 01/05/1996</p>
          <p><strong>Teléfono</strong>: 918-936-9585</p>
          <p><strong>Ciudad</strong>: Tokyo, Japón</p>
          <p class="Lawn">Trabajando en <strong class="Lawn">Lawn N</strong></p>
        </div>
        <div>
          <button id="seguir" @click="estadoSeguido">
            {{ siguiendo ? "Seguir" : "Dejar de seguir" }}
          </button>
        </div>
      </section>
    </div>

    <div class="contenedor2">
      <section id="Sobre-Mi">
        <div class="sobreMi-contenedor">
          <div class="sobremi">
            <h3>Sobre mí</h3>
            <p class="contenido">¡Hola a todos! Soy Jane, y actualmente</p>
            <p class="contenido">vivo en la vibrante y emocionante</p>
            <p class="contenido">ciudad de Tokyo, Japón. Me encanta</p>
            <p class="contenido">capturar la escencia de la vida urbana a</p>
            <p class="contenido">través de mi lente, explorando el</p>
            <p class="contenido">contraste entre la arquitectura</p>
            <p class="contenido">moderna y las tradiciones centenarias</p>
            <p class="contenido">capturar la escencia de la vida urbana a</p>
            <p class="contenido">que conviven en esta metrópolis</p>
            <p class="contenido">única. Desde rascacielos</p>
            <p class="contenido">deslumbrantes y calles bulliciosas</p>
            <p class="contenido">hasta templos serenos y jardines</p>
            <p class="contenido">tranquilos, encuentro inspiración en</p>
            <p class="contenido">cada rincón de esta increíble ciudad.</p>
          </div>
        </div>
      </section>
    </div>
    <section class="publicacion">
      <p class="publicado">Publicado hace 1 semana</p>
      <img :src="ImagenPublicacion" class="imag-public" />
      <div class="mg">
        <button id="MeGusta" @click="botonMeGusta">
          {{ mg ? "Me Gusta" : "Me Gusta" }}
        </button>
        <span id="cantidadLikes"
          ><strong>{{ i + " Likes" }}</strong></span
        >
      </div>
      <div class="comentarios">
        <h3>Comentarios</h3>
        <div class="comentarios-seteados">
          <p v-for="(comentario, index) in comentarios" :key="index">
            <strong class="nombre2">{{ comentario.nombre }}: </strong
            >{{ comentario.texto }}
          </p>
        </div>
        <div
          class="comentario-nuevo"
          v-for="(comentario, indice) in comentariosNuevos"
          :key="indice"
        >
          <p>
            <strong class="nombre2">{{ comentario.nombre }}: </strong
            >{{ comentario.texto }}
            <button
              class="eliminar-btn"
              @click="eliminarComentarioNuevo(indice)"
            >
              Eliminar
            </button>
          </p>
        </div>
      </div>
      <form class="inp-comentarios">
        <input
          type="text"
          placeholder="Deja tu comentario..."
          v-model="nuevoComentario"
        />
        <button id="btnEnviar" @click.prevent="agregarComentario">
          Comentar
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import LogoWeb from "@/assets/LogoWeb.png";
import FotoPerfil from "@/assets/FotoPerfil.jpg";
import ImagenPublicacion from "@/assets/ImagenPublicacion.jpg";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      LogoWeb,
      FotoPerfil,
      ImagenPublicacion,
      usuarioIngresado: "",
      siguiendo: true,
      i: 200,
      mg: true,
      nuevoComentario: "",
      comentariosNuevos: [],
      comentarios: [
        {
          nombre: "Juan Perez",
          texto: "¡Wow, esta foto de Tokio es Impresionante!🎆💫",
        },
        {
          nombre: "Kathleen J Rennie",
          texto:
            "¡Esta foto de Tokio es simplemente espectacular! Me trae tantos recuerdos.",
        },
      ],
    };
  },
  methods: {
    estadoSeguido() {
      this.siguiendo = !this.siguiendo;
    },
    eliminarComentarioNuevo(indice) {
      this.comentariosNuevos.splice(indice, 1);
    },
    botonMeGusta() {
      if (!this.mg) {
        this.i--;
      } else {
        this.i++;
      }
      this.mg = !this.mg;
    },
    agregarComentario() {
      const nombre = this.usuarioIngresado.trim();
      const comentario = this.nuevoComentario.trim();

      if (nombre === "" || comentario === "") {
        this.chequeoValores(
          "Error",
          "Recuerda ingresar un nombre de usuario y un comentario",
          "error"
        );
      } else {
        this.chequeoValores(
          "Comentario enviado",
          `Usuario: ${nombre}`,
          "success"
        ).then(() => {
          this.comentariosNuevos.push({ nombre: nombre, texto: comentario });
          this.nuevoComentario = "";
        });
      }
    },
    chequeoValores(titulo, mensaje, icono) {
      return Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "Aceptar",
        allowOutsideClick: false,
      });
    },
  },
};
</script>

<style scoped>
.AppGlobo {
  background-color: rgb(196, 196, 196);
  font-family: "Montserrat", sans-serif;
  margin: 0px;
  padding: 0px;
}

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:ital,wght@0,400;0,700;0,900;1,500&family=Poppins:wght@700&display=swap");

.Lawn {
  color: grey;
}

/* Creamos una clase para el encabezado, que tendrá un display de grid para utilizar CSS Grid Layout */
.encabezado {
  display: grid;
  /* Le indicamos al grid que tendrá 2 columnas de igual ancho */
  grid-template-columns: 1fr 1fr;
  /* Establecemos el color de fondo del encabezado */
  background-color: #2196f3;
  /* Centramos verticalmente los elementos del encabezado */
  align-items: center;
  height: 60px;
}

/* Creamos una clase para el contenedor del logo, que tendrá un display de flex para centrar verticalmente el logo */
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  /* Colocamos el contenido del contenedor en el inicio de la primera columna */
  justify-self: start;
}

/* Le damos un ancho del 50% al logo para que se ajuste al ancho del contenedor */
.logo img {
  width: 50%;
}

/* Creamos una clase para el contenedor del input, que tendrá un display de flex para centrar verticalmente el input */
.Usuario_Recibido {
  display: inline-block;
  border: 2px solid #2196f3;
  align-items: center;
  justify-content: center;
  padding-right: 13.2%;
  /* Colocamos el contenido del contenedor en el final de la segunda columna */
  justify-self: end;
}

.Usuario_Recibido input {
  padding: 2%;
  /*Establecemos un padding para el input para darle espacio interno */
  border: 5px solid white;
  /* Color y tamaño del borde */
  border-radius: 10px;
  /* Esquinas redondeadas */
  background-color: white;
  /* Color de fondo */
  color: #2196f3;
  /* Color de letra */
}

/* Eliminar los bordes blancos y negros que aparecen al hacer clic sobre el input */
.Usuario_Recibido input:focus {
  outline: none;
}

/* Cambiamos el color del texto del placeholder a celeste, alineamos el texto al centro y le damos tamaño. */
.Usuario_Recibido input::placeholder {
  color: #2196f3;
  font-size: 12.5px;
  font-weight: ExtraLight 200;
  text-align: left;
}

/* CAJAS DE LOS 3 CONTENEDORES (INFO. BASICA-SOBRE MI-PUBLICACIÓN */
#informacion {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-family: Bold 700;
}

.info-contendor {
  display: flex;
  align-items: center;
}

.nombre {
  font-size: 40px;
  font-family: Bold 700;
}

.Jane-Doe img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #2196f3;
  padding: 5px;
  margin-left: 30px;
  max-width: 100%;
}

.info-Jane {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  line-height: 0.01;
  padding: 5px;
}

#seguir {
  position: absolute;
  right: 200px;
  margin: auto;
  padding: 13px;
  margin-top: 40px;
  background: #2196f3;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  width: 120px;
  height: 40px;
  top: 300px;
}

/* ---------------------------------------- */

#Sobre-Mi {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin-right: 120px;
  margin-top: 60px;
  padding: 15px;
  width: 270px;
  float: right;
}

.sobreMi-contenedor {
  align-items: left;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  width: 290px;
}

.sobremi {
  color: grey;
  font-size: 30px;
  font-family: Bold 700;
  line-height: 2;
}

.sobreMi-contenedor p {
  color: black;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 0.2;
  align-items: center;
  text-align: left;
}

/* ----------------------------------------------- */

.publicacion {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin-left: 120px;
  margin-top: 60px;
  padding: 15px;
  width: 750px;
  height: 1000px;
  float: left;
}

.imag-public {
  width: 700px;
  border-radius: 20px;
  padding: 10px;
  max-width: 100%;
  margin: 15px;
  margin-top: 0px;
}

.publicado {
  text-align: start;
  margin-left: 25px;
}

.mg {
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 125px;
}

#MeGusta {
  background: #cfcfcf;
  border: none;
  border-radius: 7px;
  width: 120px;
  height: 40px;
  font-weight: 600;
  cursor: pointer;
  color: #2196f3;
}

.comentario {
  padding-top: 10px;
}

.inpUsuario {
  padding-top: 40px;
  font-size: 10px;
}

.inp-comentarios {
  margin: 2.5rem 0 0 5rem;
  display: flex;
  justify-content: space-between;
  margin: 2rem 5rem;
}

.inp-comentarios input {
  background: #cfcfcf;
  border: none;
  border-radius: 10px;
  width: 70%;
  height: 2rem;
}

#btnEnviar {
  background: #2196f3;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: 6rem;
  cursor: pointer;
}

#btnEnviar:hover {
  background: #2196f3;
  transition: 0.3s;
}

.nombre2 {
  font-size: 15px;
  font-family: Bold 700;
}

.comentarios {
  width: 85%;
  margin: 2.5rem 0 0 5rem;
  position: relative;
}

.eliminar-btn {
  background-color: #cf0000be;
  color: hsla(0, 0%, 97%, 0.726);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 0;
}
</style>
