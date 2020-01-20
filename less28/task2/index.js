  const markFavorites = (tree, favorites) => {
      const isFavorite = favorites.includes(tree.id);

      return {
          ...tree,
          isFavorite,
          nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
      }
  }






/*Напишите функцию, которая каждый узел дерева каталога помечает в зависимости от настройки

Основные требования:
Функция должна экспортироваться под именем markFavorites
Сигнатура markFavorites(tree, favorites), где tree - древовидная структура каталога, favorites - массив идентификаторов любимых разделов каталога
Функция должна пометить свойством isFavorite: true, если раздел входит в список любимых и isFavorite: false в противном случае
Пример работы:*/
            const favorites = ['id-1'];
           
            const tree = {
                id: 'id-1',
                name: 'Products',
                nodes: [
                    {
                        id: 'id-2',
                        name: 'Food',
                        nodes: [
                            {
                                id: 'id-3',
                                name: 'Drinks',
                                nodes: [],
                            }
                        ]
                    },

                ],
            };
            const result = markFavorites(tree, favorites);
            console.log(result);

        
//Функция должна поддерживать любой уровень вложенности узлов