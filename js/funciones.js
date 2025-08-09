  function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm',1);
        abrirConexion.onerror = function(){
            console.log('Se ha producido un error');
        };

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
            console.log('Se abrio la conexion correctamente')
        };
    }

   function imprimirAlerta(mensaje, tipo){

        const alerta = document.querySelector('.alerta');

        if(!alerta){
            const divMensaje = document.createElement('DIV');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx.auto', 'mt-6', 'text-center', 'border', 'alerta');
            
            //Si es de tipo error, agrega una clase
            if(tipo === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            }
            else{
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }
            
            divMensaje.textContent = mensaje;
            
            //Insertamos en el DOM
            formulario.appendChild(divMensaje);
            
            
            //quitar despues de 5 segundos
            setTimeout(()=> {
                divMensaje.remove();
            }, 3000);
            }
    }
