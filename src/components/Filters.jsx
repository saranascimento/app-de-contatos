import React from 'react'
import "./Filters.scss"

class Filters extends React.Component {
	render() {
    const buttons = ["Nome", "País", "Empresa", "Departamento", "Data de admissão"]
		return (
      <div className="container" data-testid="filters">
			<section className="filters" >
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar" />

              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>
        
            {buttons.map(button => 
              <Button key={button} name={button} />
            )}

          </section>
        </div>
		)
	}
}

function Button(props) {
  const classList = props.name === "Nome" ? "filters__item is-selected" : "filters__item"
  return (
    <button type="button" className={classList}>
      {props.name}
      <i className="fas fa-sort-down" />
    </button>
  )
}

export default Filters
