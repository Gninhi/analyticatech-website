export default function Cookies() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#0A192F]">
        Politique de Cookies
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A192F]">
          Qu'est-ce qu'un cookie ?
        </h2>
        <p className="mb-4">
          Un cookie est un petit fichier texte déposé sur votre terminal
          (ordinateur, tablette ou téléphone mobile) lors de votre visite sur
          notre site web. Les cookies nous permettent de reconnaître votre
          navigateur et de stocker certaines informations pour améliorer votre
          expérience de navigation et nous aider à comprendre comment notre site
          est utilisé.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A192F]">
          Les cookies que nous utilisons
        </h2>
        <p className="mb-4">Notre site utilise différents types de cookies :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Cookies essentiels :</strong> Ces cookies sont nécessaires
            au fonctionnement de notre site. Ils vous permettent de naviguer sur
            le site et d'utiliser ses fonctionnalités. Sans ces cookies,
            certains services que vous avez demandés ne peuvent pas être
            fournis.
          </li>
          <li>
            <strong>Cookies de performance :</strong> Ces cookies collectent des
            informations sur la façon dont les visiteurs utilisent notre site,
            par exemple les pages les plus visitées ou les messages d'erreur
            affichés. Ces cookies ne collectent pas d'informations permettant
            d'identifier un visiteur. Toutes les informations collectées par ces
            cookies sont agrégées et donc anonymes. Ils sont uniquement utilisés
            pour améliorer le fonctionnement de notre site.
          </li>
          <li>
            <strong>Cookies de fonctionnalité :</strong> Ces cookies permettent
            à notre site de se souvenir des choix que vous faites (comme votre
            nom d'utilisateur, votre langue ou la région où vous vous trouvez)
            et fournissent des fonctionnalités améliorées et plus personnelles.
          </li>
          <li>
            <strong>Cookies de ciblage ou publicitaires :</strong> Ces cookies
            sont utilisés pour diffuser des publicités plus pertinentes pour
            vous et vos intérêts. Ils sont également utilisés pour limiter le
            nombre de fois que vous voyez une publicité et pour aider à mesurer
            l'efficacité des campagnes publicitaires.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A192F]">
          Gestion des cookies
        </h2>
        <p className="mb-4">
          Vous pouvez contrôler et/ou supprimer des cookies comme vous le
          souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur
          votre ordinateur et vous pouvez configurer la plupart des navigateurs
          pour qu'ils les bloquent. Mais dans ce cas, vous devrez peut-être
          ajuster manuellement certaines préférences chaque fois que vous
          visiterez un site, et certains services et fonctionnalités pourraient
          ne pas fonctionner.
        </p>
        <p className="mb-4">
          Pour plus d'informations sur la façon de gérer les cookies dans votre
          navigateur, veuillez consulter les liens suivants :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077FF] hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077FF] hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077FF] hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077FF] hover:underline"
            >
              Safari
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A192F]">
          Modifications de notre politique de cookies
        </h2>
        <p className="mb-4">
          Nous pouvons modifier cette politique de cookies de temps à autre.
          Toute modification sera publiée sur cette page et, si les
          modifications sont importantes, nous vous fournirons un avis plus
          visible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A192F]">Contact</h2>
        <p className="mb-4">
          Si vous avez des questions concernant cette politique de cookies,
          veuillez nous contacter à l'adresse suivante :
          privacy@analyticatech.fr
        </p>
      </section>
    </div>
  );
}
