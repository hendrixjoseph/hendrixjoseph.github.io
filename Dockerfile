FROM jekyll/jekyll:3

WORKDIR /srv/jekyll

COPY . .

EXPOSE 4000

CMD [ "jekyll", "serve" ]

# docker build . -t joehx/jekyll
# docker run -p 4000:4000 -d joehx/jekyll