import uuid


class DatasetStore:

    def __init__(self):
        self._datasets = {}

    def save(self, dataframe):

        dataset_id = str(uuid.uuid4())

        self._datasets[dataset_id] = dataframe

        return dataset_id

    def get(self, dataset_id):

        return self._datasets.get(dataset_id)


dataset_store = DatasetStore()