import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardCompany({ company }) {
  return (
    <div className="CardCompany_body">
      <img
        src={`${import.meta.env.VITE_API_URL}/uploads/${company.image}`}
        alt="stan lee"
      />
      <section>
        <h2>{company.name}</h2>
        <p>Nombre de salariés: {company.size}</p>
        <div className="CardCompany_num_offre_see_offer">
          <p>17 Offres</p>
          <Link to="announce">
            <button type="button">Voir l'offre</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

CardCompany.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
