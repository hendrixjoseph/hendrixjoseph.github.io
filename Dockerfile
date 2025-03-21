FROM jekyll/jekyll:3

WORKDIR /srv/jekyll

COPY . .

RUN gem install jekyll-redirect-from
RUN gem install jekyll-sitemap
RUN gem install jemoji

EXPOSE 4000

CMD [ "jekyll", "serve" ]

# docker build . -t joehx/jekyll
# docker run -p 4000:4000 -d joehx/jekyll