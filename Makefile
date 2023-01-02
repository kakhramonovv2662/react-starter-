include .env

docker-login:
	docker login ${DOCKER_HOST} -u ${DOCKER_USERNAME} -p ${DOCKER_TOKEN}

build-image:
	docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

push-image:
	docker push "${IMAGE_NAME}:${IMAGE_TAG}"

run-image:
	docker run -d -it -p ${EXPOSE}:80 --name adminpanel "${IMAGE_NAME}:${IMAGE_TAG}"

stop-container:
	docker rm -f adminpanel

build-run: stop-container build-image run-image

install:
	npm install --legacy-peer-deps

run-dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf node_modules package-lock.json
