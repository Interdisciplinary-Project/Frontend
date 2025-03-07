import { arrayOf, string, func, number } from 'prop-types';

function TabHeader({ titles, tab, changeTab }) {
  return (
    <div
      className="lg:flex lg:justify-start lg:items-center border-b border-solid border-social-gray
                 md:flex md:justify-start md:items-center
                 flex justify-center items-center"
    >
      {titles.map((title, i) => {
        return (
          <p
            key={i}
            className={`
              p-3 font-medium cursor-pointer hover:bg-social-gray
              select-none transition-colors
              ${tab === i ? 'bg-light-social-brand text-social-brand hover:bg-light-social-brand' : ''}
            `}
            onClick={() => changeTab(i)}
          >
            {title}
          </p>
        );
      })}
    </div>
  );
}

TabHeader.propTypes = {
  titles: arrayOf(string).isRequired,
  tab: number.isRequired,
  changeTab: func.isRequired,
};

export { TabHeader };
