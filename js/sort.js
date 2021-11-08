document.addEventListener('DOMContentLoaded', function () {
  const stats = [
    { season: '2016/17', games: 1, goals: 3, pass: 2, gp: 5, rating: 75.50 },
    { season: '2017/18', games: 3, goals: 2, pass: 5, gp: 7, rating: 74 },
    { season: '2018/18', games: 5, goals: 5, pass: 1, gp: 2, rating: 80.20 },
    { season: '2019/20', games: 4, goals: 1, pass: 4, gp: 1, rating: 82.60 },
    { season: '2020/21', games: 5, goals: 5, pass: 3, gp: 3, rating: 84.90 }
  ];

  function createTable(data) {
    const table = document.querySelector('.table');

    const tableList = document.createElement('ul');

    data.forEach(function (item) {
      const tableItem = document.createElement('li');
      tableItem.append(createItem(item));

      tableItem.classList.add('table-list__item');
      tableList.classList.add('table-list');

      tableList.append(tableItem);
    });

    table.classList.add('table__active');
    table.append(tableList);

    document.querySelectorAll('.header__title').forEach(function (item) {
      item.addEventListener('click', function (e) {
        sortData(e.target.textContent);
      });
    })
  }

  function createItem(item) {
    const itemList = document.createElement('ul');
    const itemSeason = document.createElement('li');
    const itemGames = document.createElement('li');
    const itemGoals = document.createElement('li');
    const itemPasses = document.createElement('li');
    const itemGnP = document.createElement('li');
    const itemRating = document.createElement('li');

    itemSeason.textContent = 'Сезон ' + item.season;
    itemGames.textContent = item.games;
    itemGoals.textContent = item.goals;
    itemPasses.textContent = item.pass;
    itemGnP.textContent = item.gp;
    itemRating.textContent = item.rating;

    itemList.classList.add('table__data-list');
    itemSeason.classList.add('data-list__item', 'data-list__item__season');
    itemGames.classList.add('data-list__item');
    itemGoals.classList.add('data-list__item');
    itemPasses.classList.add('data-list__item');
    itemGnP.classList.add('data-list__item');
    itemRating.classList.add('data-list__item', 'data-list__item__rating');

    itemList.append(itemSeason, itemGames, itemGoals, itemPasses, itemGnP, itemRating);

    return itemList;
  }

  function sortData(object) {
    if (object === 'Кол-во игр' || object === 'И') {
      stats.sort(function (a, b) {
        return a.games - b.games;
      });
    } else if (object === 'Гол' || object === 'Г') {
      stats.sort(function (a, b) {
        return a.goals - b.goals;
      });
    } else if (object === 'Пас' || object === 'П') {
      stats.sort(function (a, b) {
        return a.pass - b.pass;
      });
    } else if (object === 'Гол + пас' || object === 'Г + П') {
      stats.sort(function (a, b) {
        return a.gp - b.gp;
      });
    } else if (object === 'Рейтинг' || object === 'Р') {
      stats.sort(function (a, b) {
        return a.rating - b.rating;
      });
    }

    clearTable();
    createTable(stats);
  }

  function clearTable() {
    document.querySelector('.table-list').remove();
  }

  window.createTable = createTable(stats);
});