// Получаем базовый путь из переменной окружения или используем '/'
const BASE_PATH = import.meta.env.BASE_URL || '/'

/**
 * Добавляет базовый путь к относительному пути
 * @param {string} path - путь относительно корня сайта
 * @returns {string} - полный путь с учетом базового пути
 */
export const getPath = (path) => {
  // Убираем лишние слеши и добавляем базовый путь
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const cleanBasePath = BASE_PATH.endsWith('/')
    ? BASE_PATH.slice(0, -1)
    : BASE_PATH

  return cleanBasePath + '/' + cleanPath
}

export default getPath
