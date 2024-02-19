package com.example.pokedex.pokemonlist.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavController
import com.example.pokedex.pokemonlist.PokemonListViewModel

@Composable
fun PokemonList(
    navController: NavController,
    viewModel: PokemonListViewModel = hiltViewModel()
) {

    val pokemonList by remember { viewModel.pokemonList }
    val loadError by remember { viewModel.loadError }
    val isLoading by remember { viewModel.isLoading }
    val endReached by remember { viewModel.endReached }
    val isSearching by remember { viewModel.isSearching }

    LazyColumn(contentPadding = PaddingValues(16.dp)) {

        val itemCount = if (pokemonList.size % 2 == 0) {
            pokemonList.size / 2
        } else {
            pokemonList.size / 2 + 1
        }

        items(itemCount) {
            if (it >= itemCount - 1 && !endReached && !isLoading && !isSearching) {

                LaunchedEffect(key1 = true) {
                    viewModel.loadPokemonPaginated()

                }
            }
            PokedexRow(rowIndex = it, entries = pokemonList, navController = navController)
        }

    }

    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier.fillMaxSize()
    ) {

        if (isLoading) {
            CircularProgressIndicator(color = MaterialTheme.colorScheme.primary)
        }

        if (loadError.isNotEmpty()) {
            RetrySection(error = loadError) {
                viewModel.loadPokemonPaginated()
            }
        }

    }

}