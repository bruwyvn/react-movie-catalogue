const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            404
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Página não encontrada. Cheque o endereço ou{" "}
            <Link to="/" className="text-indigo-600 hover:text-indigo-500">
              voltar a página inicial
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound