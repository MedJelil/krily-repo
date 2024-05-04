import React from "react";
import styles from "../styles/styles.module.css";
import RadioButtons from "../components/RadioButtons";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={`max-w-lg w-full`}>
        <div
          className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden ${styles.box}`}
        >
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-white">
            Bienvenue
            </h2>
            <p className="mt-4 text-center text-gray-400">
            Enregistrer
            </p>
            <form method="POST" action="#" className="mt-8 space-y-6">
            <RadioButtons />
              <div className="rounded-md shadow-sm">
                <div>
                  <label className="sr-only" htmlFor="nom">
                    Nom
                  </label>
                  <input
                    placeholder="Votre Nom"
                    className={`appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="telephone">
                    Telephone
                  </label>
                  <input
                    placeholder="Votre Telephone"
                    className={`appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${styles.inputNumber}`}
                    type="text"
                    name="telephone"
                    id="telephone"
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="password">
                    Mot de pass
                  </label>
                  <input
                    placeholder="Password"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="password">
                    Confirmer mot de pass
                  </label>
                  <input
                    placeholder="Confirmer mot de pass"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password"
                    name="password"
                    id=""
                  />
                </div>
              </div>
              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Vous avez déjà un compte</span>
            <a
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="Login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
