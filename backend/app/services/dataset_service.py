from app.data_processing.loader import load_csv
from app.data_processing.statistics import basic_statistics


def process_dataset(file):

    df = load_csv(file)

    stats = basic_statistics(df)

    return stats
