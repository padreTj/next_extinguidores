import { useForm } from "react-hook-form";

const Formulario = () => {
    const {
        register,
        formState: { errors },
        // watch,
        handleSubmit,
    } = useForm({
        defaultValues: {
            nombre: "",
            direccion: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input
                        className={`appearance-none border ${errors.nombre ? "border-red-500" : ""
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        type="text"
                        {...register("nombre", {
                            required: true,
                            maxLength: 10,
                        })}
                    />
                    {errors.nombre?.type === "required" && (
                        <p className="text-red-500 text-xs italic">
                            El campo nombre es requerido
                        </p>
                    )}
                    {errors.nombre?.type === "maxLength" && (
                        <p className="text-red-500 text-xs italic">
                            El campo nombre debe tener menos de 10 caracteres
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`appearance-none border ${errors.email ? "border-red-500" : ""
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        type="text"
                        {...register("email", {
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        })}
                    />
                    {errors.email?.type === "pattern" && (
                        <p className="text-red-500 text-xs italic">
                            El formato del email es incorrecto
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="direccion"
                    >
                        Mensaje
                    </label>
                    <textarea
                        className={`appearance-none border ${errors.direccion ? "border-red-500" : ""
                            } rounded w-full py-7 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        type="text"
                        {...register("direccion", {
                            required: true,
                        })}
                    />
                    {errors.direccion?.type === "required" && (
                        <p className="text-red-500 text-xs italic">
                            El campo dirección es requerido
                        </p>
                    )}
                </div>
                {/* boton de submit con tailwind */}
                <button className="group flex w-full justify-center rounded-md bg-seccondary py-2 px-3 text-sm font-semibold text-white hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                    Enviar
                </button>
            </form>
        </div>
)};

export default Formulario;