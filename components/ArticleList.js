import React from 'react'

import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const ArticleList = ({article}) => {
    return (
      <div className={articleStyles.grid}>
        {article.map((article, index) => (
          <ArticleItem article={article} />
        ))}
      </div>
    );
}

export default ArticleList
