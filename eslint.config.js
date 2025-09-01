import config from 'friendly-frontend-lint-config/eslint'

export default [
  ...config,
  {
    rules: {
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['preferButton'],
        },
      ],
    },
  },
]
