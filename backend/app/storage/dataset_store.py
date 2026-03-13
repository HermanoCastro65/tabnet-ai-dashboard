import uuid


class DatasetStore:

    def __init__(self):
        self.datasets = {}

    def save(self, dataframe):
        dataset_id = str(uuid.uuid4())
        self.datasets[dataset_id] = dataframe
        return dataset_id

    def get(self, dataset_id):
        return self.datasets.get(dataset_id)


dataset_store = DatasetStore()
