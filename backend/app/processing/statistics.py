def compute_basic_statistics(dataframe):

    return {
        "rows": len(dataframe),
        "columns": len(dataframe.columns),
    }